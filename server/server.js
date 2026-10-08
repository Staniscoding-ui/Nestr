import express from 'express'
import cors from 'cors'
import { pool } from './db/pool.js'
import * as activities from './activitiesRepo.js'

const app = express()

const allowedOrigins = (
  process.env.CORS_ORIGINS ||
  'http://localhost:5173'
)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(cors({ origin: allowedOrigins }))
app.use(express.json({ limit: '100kb' }))

// Is the process alive?
app.get('/healthz', (request, response) => {
  response.json({ ok: true })
})

// Is the database reachable?
app.get('/readyz', async (request, response) => {
  try {
    await pool.query('SELECT 1')
    response.json({ ok: true, db: 'up' })
  } catch (error) {
    console.error('readyz failed:', error.message)
    response.status(503).json({
      ok: false,
      db: 'down',
    })
  }
})

// Validate activity data on the server.
function validateActivity(body) {
  const errors = []

  const activity =
    typeof body.activity === 'string'
      ? body.activity.trim()
      : ''

  const description =
    typeof body.description === 'string'
      ? body.description.trim()
      : ''

  const date =
    typeof body.date === 'string'
      ? body.date.trim()
      : ''

  const status =
    typeof body.status === 'string'
      ? body.status.trim()
      : 'pending'

  const creatureId =
    body.creatureId === null ||
    body.creatureId === undefined ||
    body.creatureId === ''
      ? null
      : Number(body.creatureId)

  if (!activity) {
    errors.push('activity is required')
  }

  if (activity.length > 120) {
    errors.push(
      'activity must be 120 characters or fewer'
    )
  }

  if (description.length > 2000) {
    errors.push(
      'description must be 2000 characters or fewer'
    )
  }

  if (!date) {
    errors.push('date is required')
  }

  if (
    status !== 'pending' &&
    status !== 'completed'
  ) {
    errors.push(
      'status must be pending or completed'
    )
  }

  if (
    creatureId !== null &&
    (!Number.isInteger(creatureId) ||
      creatureId < 1 ||
      creatureId > 48)
  ) {
    errors.push(
      'creatureId must be a whole number from 1 to 48'
    )
  }

  if (
    status === 'pending' &&
    creatureId !== null
  ) {
    errors.push(
      'pending activities cannot have a creatureId'
    )
  }

  if (
    status === 'completed' &&
    creatureId === null
  ) {
    errors.push(
      'completed activities require a creatureId'
    )
  }

  return {
    errors,
    value: {
      activity,
      description,
      date,
      status,
      creatureId,
    },
  }
}

// Get all activities
app.get(
  '/api/activities',
  async (request, response, next) => {
    try {
      response.json(
        await activities.getAll(pool)
      )
    } catch (error) {
      next(error)
    }
  }
)

// Get one activity
app.get(
  '/api/activities/:id',
  async (request, response, next) => {
    try {
      const row =
        await activities.getById(
          pool,
          request.params.id
        )

      if (!row) {
        return response
          .status(404)
          .json({ error: 'Not found' })
      }

      response.json(row)
    } catch (error) {
      next(error)
    }
  }
)

// Create activity
app.post(
  '/api/activities',
  async (request, response, next) => {
    const {
      errors,
      value,
    } = validateActivity(
      request.body ?? {}
    )

    if (errors.length > 0) {
      return response
        .status(400)
        .json({
          error: errors.join('; '),
        })
    }

    try {
      response
        .status(201)
        .json(
          await activities.create(
            pool,
            value
          )
        )
    } catch (error) {
      next(error)
    }
  }
)

// Update activity
app.put(
  '/api/activities/:id',
  async (request, response, next) => {
    const {
      errors,
      value,
    } = validateActivity(
      request.body ?? {}
    )

    if (errors.length > 0) {
      return response
        .status(400)
        .json({
          error: errors.join('; '),
        })
    }

    try {
      const row =
        await activities.update(
          pool,
          request.params.id,
          value
        )

      if (!row) {
        return response
          .status(404)
          .json({ error: 'Not found' })
      }

      response.json(row)
    } catch (error) {
      next(error)
    }
  }
)

// Delete activity
app.delete(
  '/api/activities/:id',
  async (request, response, next) => {
    try {
      const removed =
        await activities.remove(
          pool,
          request.params.id
        )

      if (!removed) {
        return response
          .status(404)
          .json({ error: 'Not found' })
      }

      response.status(204).end()
    } catch (error) {
      next(error)
    }
  }
)

app.use((request, response) => {
  response
    .status(404)
    .json({ error: 'No such route' })
})

app.use(
  (error, request, response, next) => {
    console.error(error)

    response
      .status(500)
      .json({
        error:
          'Something went wrong on the server',
      })
  }
)

const port =
  process.env.PORT || 3000

app.listen(port, () => {
  console.log(
    `API listening on http://localhost:${port}`
  )

  console.log(
    `CORS allows: ${allowedOrigins.join(', ')}`
  )
})
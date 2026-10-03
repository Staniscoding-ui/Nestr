import { useEffect, useState } from 'react'
import {
  listActivities,
  createActivity,
  updateActivity,
  deleteActivity,
} from './api'

const EMPTY_FORM = {
  name: '',
  description: '',
}

export default function App() {
  const [status, setStatus] = useState('loading')
  const [activities, setActivities] = useState([])
  const [error, setError] = useState(null)
  const [slow, setSlow] = useState(false)

  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)

  async function load() {
    setStatus('loading')
    setError(null)

    const timer = setTimeout(() => setSlow(true), 3000)

    try {
      setActivities(await listActivities())
      setStatus('ready')
    } catch (caught) {
      setError(caught)
      setStatus('error')
    } finally {
      clearTimeout(timer)
      setSlow(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim()) return

    setSaving(true)
    setError(null)

    try {
      const created = await createActivity({
        name: form.name.trim(),
        description: form.description.trim(),
        completed: false,
      })

      setActivities([created, ...activities])
      setForm(EMPTY_FORM)
    } catch (caught) {
      setError(caught)
    } finally {
      setSaving(false)
    }
  }

  async function handleComplete(activity) {
    try {
      const updated = await updateActivity(activity.id, {
        completed: !activity.completed,
      })

      setActivities(
        activities.map((item) =>
          item.id === updated.id ? updated : item
        )
      )
    } catch (caught) {
      setError(caught)
    }
  }

  async function handleDelete(id) {
    const previous = activities

    setActivities(
      activities.filter((activity) => activity.id !== id)
    )

    try {
      await deleteActivity(id)
    } catch (caught) {
      setActivities(previous)
      setError(caught)
    }
  }

  const completedCount = activities.filter(
    (activity) => activity.completed
  ).length

  return (
    <div className="page">
      <header>
        <h1>Nestr</h1>

        <p className="lede">
          Activity Game-ified Logger
        </p>
      </header>

      <section className="card">
        <h2>Your Progress</h2>

        <p>
          {completedCount} activities completed
        </p>
      </section>

      {error && (
        <p className="error" role="alert">
          {error.message}
          <button onClick={load}>Try again</button>
        </p>
      )}

      <form onSubmit={handleSubmit} className="card">
        <h2>Add Activity</h2>

        <label htmlFor="name">
          Activity Name
        </label>

        <input
          id="name"
          value={form.name}
          onChange={(event) =>
            setForm({
              ...form,
              name: event.target.value,
            })
          }
          maxLength={120}
          placeholder="e.g. Study JavaScript"
          required
        />

        <label htmlFor="description">
          Description
        </label>

        <textarea
          id="description"
          value={form.description}
          onChange={(event) =>
            setForm({
              ...form,
              description: event.target.value,
            })
          }
          maxLength={500}
          rows={3}
          placeholder="What are you going to do?"
        />

        <button type="submit" disabled={saving}>
          {saving ? 'Adding...' : 'Add Activity'}
        </button>
      </form>

      <section>
        <h2>Activities</h2>

        {status === 'loading' && (
          <p className="muted">
            Loading
            {slow
              ? '. The server may be waking up...'
              : '...'}
          </p>
        )}

        {status === 'ready' &&
          activities.length === 0 && (
            <p className="muted">
              No activities yet. Add your first one above.
            </p>
          )}

        {status === 'ready' &&
          activities.length > 0 && (
            <ul className="list">
              {activities.map((activity) => (
                <li key={activity.id} className="card">
                  <h3>{activity.name}</h3>

                  {activity.description && (
                    <p>{activity.description}</p>
                  )}

                  <p>
                    {activity.completed
                      ? 'Completed'
                      : 'Not completed'}
                  </p>

                  <button
                    onClick={() =>
                      handleComplete(activity)
                    }
                  >
                    {activity.completed
                      ? 'Mark Incomplete'
                      : 'Complete'}
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(activity.id)
                    }
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
      </section>
    </div>
  )
}
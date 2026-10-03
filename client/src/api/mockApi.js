import seed from './seed.json'

const KEY = 'nestr:activities'

const delay = (ms = 250) =>
  new Promise((resolve) => setTimeout(resolve, ms))

function read() {
  const stored = localStorage.getItem(KEY)

  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      localStorage.removeItem(KEY)
    }
  }

  localStorage.setItem(KEY, JSON.stringify(seed))
  return seed
}

function write(rows) {
  localStorage.setItem(KEY, JSON.stringify(rows))
  return rows
}

export async function listActivities() {
  await delay()

  return read()
    .slice()
    .sort((a, b) => b.created_at.localeCompare(a.created_at))
}

export async function getActivity(id) {
  await delay()

  const found = read().find(
    (activity) => String(activity.id) === String(id)
  )

  if (!found) {
    throw new Error('Activity not found')
  }

  return found
}

export async function createActivity(input) {
  await delay()

  const created = {
    ...input,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
  }

  write([...read(), created])

  return created
}

export async function updateActivity(id, input) {
  await delay()

  const rows = read()

  const index = rows.findIndex(
    (activity) => String(activity.id) === String(id)
  )

  if (index === -1) {
    throw new Error('Activity not found')
  }

  rows[index] = {
    ...rows[index],
    ...input,
  }

  write(rows)

  return rows[index]
}

export async function deleteActivity(id) {
  await delay()

  write(
    read().filter(
      (activity) => String(activity.id) !== String(id)
    )
  )
}
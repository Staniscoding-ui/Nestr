const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:3000"

async function request(path, options = {}) {
  const response = await fetch(
    `${API_BASE_URL}${path}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    }
  )

  if (!response.ok) {
    let message = "Request failed"

    try {
      const data = await response.json()

      if (data.error) {
        message = data.error
      }
    } catch {
      // Keep the default error message.
    }

    throw new Error(message)
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

export async function listActivities() {
  return request("/api/activities")
}

export async function createActivity(activity) {
  return request("/api/activities", {
    method: "POST",
    body: JSON.stringify(activity),
  })
}

export async function updateActivity(id, activity) {
  return request(`/api/activities/${id}`, {
    method: "PUT",
    body: JSON.stringify(activity),
  })
}

export async function deleteActivity(id) {
  return request(`/api/activities/${id}`, {
    method: "DELETE",
  })
}
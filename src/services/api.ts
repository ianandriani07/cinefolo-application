const API_BASE_PATH = "/api"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.trim()

function isAbsoluteUrl(path: string): boolean {
  return /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(path)
}

function joinBaseAndPath(baseUrl: string, path: string): string {
  const trimmedBase = baseUrl.replace(/\/+$/, "")

  if (path.startsWith("?") || path.startsWith("#")) {
    return `${trimmedBase}${path}`
  }

  const trimmedPath = path.replace(/^\/+/, "")
  return `${trimmedBase}/${trimmedPath}`
}

function normalizePath(path: string): string {
  if (/^[a-zA-Z0-9.-]+:\d+\//.test(path)) {
    return path.slice(path.indexOf("/"))
  }

  return path
}

export function apiPath(path: string): string {
  const normalized = normalizePath(path)

  if (isAbsoluteUrl(normalized)) {
    return normalized
  }

  if (API_BASE_URL) {
    return joinBaseAndPath(API_BASE_URL, normalized)
  }

  if (!normalized.startsWith("/")) {
    return `${API_BASE_PATH}/${normalized}`
  }

  if (normalized.startsWith(API_BASE_PATH)) {
    return normalized
  }

  return `${API_BASE_PATH}${normalized}`
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(apiPath(path), {
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
    ...init,
  })

  if (res.status === 204) return undefined as T
  if (res.status === 404) throw new Error("NOT_FOUND")

  const text = await res.text()

  let data: T | undefined
  if (text) {
    try {
      data = JSON.parse(text) as T
    } catch {
      data = undefined
    }
  }

  if (!res.ok) {
    const msg = (data as any)?.message ?? (text || `HTTP ${res.status}`)
    throw new Error(msg)
  }

  return data as T
}

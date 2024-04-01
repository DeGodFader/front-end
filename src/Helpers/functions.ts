import LocalStorage from "./storage"

const excludedPaths = [
    "/auth/login",
    "/auth/refresh_token",
    "/auth/new_user"
]

type notificationType = "SUCCESS" | "ERROR" | "INFO"
type notifProps = {
  type: notificationType
  message?: string
  duration?: number
  context?: any
  from?: string
}

export const logout = () => {
  LocalStorage.removeCurrentUser()
  LocalStorage.storeApp("auth")
  document.dispatchEvent(new Event("changeapp"))
  location.assign("/")
  sessionStorage.clear()
}

export function notify({ type, message, duration, context }: notifProps) {
  const notification: any = {}
  if (type === "ERROR") {
    const error = context
    notification.message = message ? message : "An Unknown Error Occured"
    if (error) {
      if (error.name === "AxiosError") {
        const {
          data,
          status,
          config: { data: _data = {} },
        } = error.response
        notification.message = data?.error || data?.message || data?.code || error?.code
      }
    }
  }
  if (type === "SUCCESS") {
    // console.log("CONTEXT", context)
    if (["get", "put"].includes(context?.config?.method)) {
      return
    }
    if (excludedPaths.includes(context?.config?.url)) {
      return
    }

    notification.message = message ? message : "Operation Completed Successfully"
  }

  if (type === "INFO") {
    if (!message) {
      return
    }
    notification.message = message
  }

  notification.duration = duration ? duration : 3
  notification.type = type
  // @ts-ignore
  const notifyEvent = new CustomEvent("notify", { detail: notification })
  document.dispatchEvent(notifyEvent)
}


window.notify = notify
window.logout = logout
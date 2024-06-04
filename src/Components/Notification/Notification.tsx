import React, { useEffect } from "react"
import { notification } from "antd"
import { createGlobalStyle } from "styled-components"

const Notification = () => {
  const [api, contextHolder] = notification.useNotification()
  // const countRef = React.useRef(0)

  useEffect(() => {
    document.addEventListener("notify", (e: any) => {
      const notif = e.detail
      api[notif.type.toLowerCase()]({ ...notif, message: notif.message, duration: notif.duration })
    })

    return () => {
      document.removeEventListener("notify", () => {
        console.log("cleaning up listener")
      })
    }
  }, [])

  return (
    <>
      <NotifStyles />
      {contextHolder}
    </>
  )
}

export default Notification

const NotifStyles = createGlobalStyle`
@media and screen(min-width<450){
  .ant-notification-notice {
    padding: 5px !important;
    width: fit-content !important;
  }
}

.ant-notification-notice {
  padding: 5px !important;
  width: fit-content !important;
}

.ant-notification-notice-close {
  display: none !important;
}

.ant-notification-notice-success {
  background: var(--color-success-300) !important;
}

.ant-notification-notice-error {
  background: var(--color-danger-300) !important;

  .ant-notification-notice-message {
    color: white !important;
  }
} 

.ant-notification-notice-info {
  background: var(--color-info-300) !important;
}

.ant-notification-notice-message {
  font-family: QuickSand !important;
  font-size: 12px;
  font-weight: 500 !important;
}


.ant-notification-notice-icon-success.anticon {
  color: green !important;
}
.ant-notification-notice-icon-error.anticon {
  color: white !important;
}
.ant-notification-notice-icon-info.anticon {
  color: #095d7e !important;
}
`

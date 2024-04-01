import { ErrorBoundary } from 'react-error-boundary'
import Auth from './apps/Auth'
import Users from './apps/Users'
import FallBack from './Components/Errors/FallBack'
import Notification from './Components/Notification/Notification'
import { useEffect, useState } from 'react'
import AppLoader from './Components/Loaders/AppLoader'
import LocalStorage from './Helpers/storage'


type Apptypes="auth" | "users"

const APP_MAP={
  "auth": <Auth key={`auth-ui`}/>,
  "users": <Users key={`user-ui`}/>
}

function App() {
  const [currentApp, setCurrentApp] = useState(<AppLoader />)
  useEffect(() => {
    const app = LocalStorage.getApp() as Apptypes
    setCurrentApp(APP_MAP[app])

    window.document.title = `${app.toUpperCase()} - KinoVerse`
    document.addEventListener("changeapp", () => {
      const app = LocalStorage.getApp() as Apptypes
      setCurrentApp(APP_MAP[app])
      window.document.title = `${app.toUpperCase()} - KinoVerse`
      location.assign("/")
    })

    return () => {
      document.removeEventListener("changeapp", () => {})
    }
  }, [])
  return (
      <ErrorBoundary FallbackComponent={FallBack} onError={(error)=> console.log(error)}>
        <Notification />
        {currentApp}
      </ErrorBoundary>
  )
}

export default App

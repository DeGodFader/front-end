import { Provider } from "react-redux"
import { store } from "./State/store"
import App from "./App"

const Root = () => {
  return (
    <>
      <Provider store={store} children={<App />} />
    </>
  )
}

export default Root

import { createContext, useState } from "react"

export const RoutingContext = createContext([route])

const RoutingContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [route, setRoute] = useState('')

  export const pushRoute = (route = '/') => {
    // eslint-disable-next-line no-restricted-globals
    history.pushState({ url: window.location.href + route }, '', route)
    // eslint-disable-next-line no-restricted-globals
    history.forward()
  }

  return <>
    {children}
  </>
}

export default RoutingContext
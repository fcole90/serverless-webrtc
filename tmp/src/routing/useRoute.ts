import { useContext, useEffect, useState } from "react"
import RoutingContext from "./RoutingContext"


export const useRoute = () => {
  const route = useContext(RoutingContext)
  const [hasLocationChanged, setHasLocationChanged] = useState(true)
  const [currentRoute, setCurrentRoute] = useState('')

  useEffect(() => {
    window.addEventListener('hashchange', () => { 
      console.log('hashchange')
      new Event('locationchange')
    })
    
    window.addEventListener('popstate', () => {
      console.log('Popstate')
      new Event('locationchange')
    })
    
    window.addEventListener('locationchange', () => { 
      console.log('Location changed!')
      setHasLocationChanged(true)
    })
  }, [])
  

  useEffect(() => {
    if (hasLocationChanged) {
      setCurrentRoute(getRouteFromHref(window.location.href))
      setHasLocationChanged(false)
    }
  }, [hasLocationChanged])

  return currentRoute
}
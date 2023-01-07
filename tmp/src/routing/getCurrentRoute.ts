export const getCurrentRoute = () => getRouteFromHref(window.location.href)

export const getRouteFromHref = (href: string) => {
  const splittedHref = href.replace('//', '').split('/')

  if (splittedHref.length < 2) {
    return '/'
  }
  return '/' + splittedHref[1]
}
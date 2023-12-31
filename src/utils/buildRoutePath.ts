export const buildRoutePath = (path: string) => {
  const routeParametersRegex = /:([a-zA-z]+)/g
  const pathWithParameters = path.replace(
    routeParametersRegex,
    '(?<$1>[a-z0-9\\-_]+)' //?<$1> is a group name
  )

  const pathRegex = new RegExp(`^${pathWithParameters}(?<query>\\?(.*))?$`) // ? is optional and . is any character

  return pathRegex
}

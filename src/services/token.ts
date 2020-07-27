
export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("token")
    ? JSON.parse(window.localStorage.getItem("token"))
    : {}

export const setUser = user =>
  window.localStorage.setItem("token", JSON.stringify(user))

export const isLoggedIn = () => {
  console.log('hello I am called', getUser())
  const user = getUser()
  return !!user
}

export const logout = callback => {
  setUser({})
  callback()
}
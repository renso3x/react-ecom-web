import React from "react"
import { navigate } from "gatsby";
import { isLoggedIn } from "../services/token";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}
export default PrivateRoute
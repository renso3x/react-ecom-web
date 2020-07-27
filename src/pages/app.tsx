import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "../components/privateRoute";
import Dashboard from "../components/dashoard";
import Signin from "./signin";

const App = () => {
  return (
    <Router>
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <Signin path="/app/login" />
    </Router>
  )
}
export default App
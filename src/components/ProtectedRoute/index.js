import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = props => {
  // Check if the JWT token is present in cookies
  const token = Cookie.get('jwt_token')
  // If the token is undefined, redirect to the login page
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  // If the token is present, render the specified Route with its props
  return <Route {...props} />
}

export default ProtectedRoute

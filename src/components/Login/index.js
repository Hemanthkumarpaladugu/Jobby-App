// Importing necessary dependencies from the 'react' and 'react-router-dom' libraries,
// as well as 'js-cookie' for handling cookies.
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

// URL for the website logo image.
const websiteLogoInForm =
  'https://assets.ccbp.in/frontend/react-js/logo-img.png'

// Defining a class component 'LoginForm' that extends 'Component'.
class LoginForm extends Component {
  // Initializing component state with default values.
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  // Event handler to update the 'username' state based on user input.
  onGetUsername = event => this.setState({username: event.target.value})

  // Event handler to update the 'password' state based on user input.
  onGetPassword = event => this.setState({password: event.target.value})

  // Callback function executed upon successful form submission.
  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    // Setting a cookie named 'jwt_token' with the received token and additional options.
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    // Redirecting to the home page after successful login.
    history.replace('/')
  }

  // Callback function executed upon unsuccessful form submission.
  onSubmitFailure = errorMsg => {
    // Updating state to display an error message.
    this.setState({showSubmitError: true, errorMsg})
  }

  // Async function to handle the form submission.
  onSubmitLoginForm = async event => {
    // Preventing the default form submission behavior.
    event.preventDefault()

    // Destructuring 'username' and 'password' from the component state.
    const {username, password} = this.state

    // Creating an object with user details for the login API.
    const userDetails = {username, password}

    // URL for the login API.
    const loginApiUrl = 'https://apis.ccbp.in/login'

    // Options for the API request, including the request method and request body.
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    // Sending a POST request to the login API and awaiting the response.
    const response = await fetch(loginApiUrl, options)

    // Parsing the response data as JSON.
    const data = await response.json()

    // Checking if the response indicates success or failure.
    if (response.ok === true) {
      // Calling the success callback if the response is successful.
      this.onSubmitSuccess(data.jwt_token)
    } else {
      // Calling the failure callback if the response indicates an error.
      this.onSubmitFailure(data.error_msg)
    }
  }

  // Render method to render the login form component.
  render() {
    // Destructuring state values for easier access.
    const {username, password, showSubmitError, errorMsg} = this.state

    // Retrieving the JWT token from the cookie.
    const jwtToken = Cookies.get('jwt_token')

    // Redirecting to the home page if the user is already logged in.
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    // Rendering the login form with input fields, logo, and submit button.
    return (
      <div className="login-container">
        <form
          className="login-form-container"
          onSubmit={this.onSubmitLoginForm}
        >
          {/* Logo container */}
          <div className="form-logo-container">
            <img src={websiteLogoInForm} alt="website logo" />
          </div>

          {/* Username input */}
          <label className="form-label" htmlFor="username">
            USERNAME
          </label>
          <br />
          <input
            className="form-input"
            type="text"
            value={username}
            onChange={this.onGetUsername}
            placeholder="username"
            id="username"
          />
          <br />
          <br />

          {/* Password input */}
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <br />
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={this.onGetPassword}
            placeholder="password"
            id="password"
          />
          <br />
          <br />

          {/* Submit button */}
          <button className="form-submit-button" type="submit">
            Login
          </button>

          {/* Displaying error message if submission fails */}
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

// Exporting the LoginForm component as the default export.
export default LoginForm

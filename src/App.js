import {Route, Router} from 'react-router-dom'
import LoginForm from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AboutJobItem from './components/AboutJobItem'
import AllJobs from './components/AllJobs'
import './App.css'

const App = () => (
  <Router>
    {/* Public route accessible without authentication */}
    <Route exact path="/login" component={LoginForm} />
    {/* Protected route requiring authentication */}
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={AllJobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJobItem} />
    <Route path="/not-found" component={NotFound} />
    {/* <Redirect to="not-found" /> */}
  </Router>
)

export default App

// Importing the Link component from 'react-router-dom' for navigation.
import {Link} from 'react-router-dom'

// Importing the Header component from the specified file path.
import Header from '../Header'

// Importing styles for the component.
import './index.css'

// Functional component 'Home' that represents the home page.
const Home = props => {
  // Function to redirect to the '/jobs' route.
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/') // Redirecting to the home page ('/') instead of '/jobs'.
  }

  // Rendering the Home component.
  return (
    <>
      {/* Including the Header component at the top of the page. */}
      <Header />

      {/* Container for the content of the home page. */}
      <div className="home-container">
        {/* Main heading of the home page. */}
        <h1 className="home-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>

        {/* Paragraph providing information about job searching. */}
        <p className="home-paragraph">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>

        {/* Link to the '/jobs' route with a button for finding jobs. */}
        <Link className="retry-btn-link" to="/jobs">
          <button
            className="home-jobs-button"
            type="button"
            onClick={onRedirectToJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

// Exporting the Home component as the default export.
export default Home

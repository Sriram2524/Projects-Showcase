import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ProjectItem from '../ProjectItem'
import './index.css'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Projects extends Component {
  state = {
    activeId: categoriesList[0].id,
    projectsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    const {activeId} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/ps/projects?category=${activeId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === false) {
      const data = await response.json()
      const formattedData = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))
      this.setState({
        projectsList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderProjectsListView = () => {
    const {projectsList} = this.state
    return (
      <ul className="unordered-projcets-list">
        {projectsList.map(each => (
          <ProjectItem eachProjectItem={each} key={each.id} />
        ))}
      </ul>
    )
  }

  onClickFailure = () => {
    this.getProjects()
  }

  renderFailureView = () => (
    <div className="faillure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png "
        alt="failure view"
        className="faillure-view-img"
      />
      <h1 className="heading">Oops! Something Went Wrong</h1>
      <p className="para">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        onClick={this.onClickFailure}
        type="button"
        className="faillure-button"
      >
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onChangeDropDown = event => {
    this.setState({activeId: event.target.value}, this.getProjects)
  }

  renderAllItems = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProjectsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {activeId} = this.state
    return (
      <div className="bg-container">
        <div className="header">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </div>
        <select
          className="select"
          onChange={this.onChangeDropDown}
          value={activeId}
        >
          {categoriesList.map(each => (
            <option value={each.id} key={each.id}>
              {each.displayText}
            </option>
          ))}
        </select>
        {this.renderAllItems()}
      </div>
    )
  }
}
export default Projects

import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import Password from '../Password/index'

class PasswordManager extends Component {
  state = {
    passwordContainer: [],
    inputUrl: '',
    inputName: '',
    inputPassword: '',
    searchInput: '',
    showPassword: false,
  }

  onInputUrlChange = event => {
    this.setState({inputUrl: event.target.value})
  }

  onInputNameChange = event => {
    this.setState({inputName: event.target.value})
  }

  onInputPasswordChange = event => {
    this.setState({inputPassword: event.target.value})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onCheckboxClick = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  addRecords = event => {
    event.preventDefault()
    const {inputUrl, inputName, inputPassword} = this.state
    const makeEachRecord = {
      id: uuidv4(),
      url: inputUrl,
      name: inputName,
      password: inputPassword,
    }
    this.setState(prevState => ({
      passwordContainer: [...prevState.passwordContainer, makeEachRecord],
      inputUrl: '',
      inputName: '',
      inputPassword: '',
    }))
  }

  searchPasswordContainer = () => {
    const {passwordContainer, searchInput} = this.state
    // const filteredPasswordContainer = passwordContainer.filter(eachItem =>
    //   eachItem.url.toLowerCase().includes(searchInput.toLowerCase()),
    // )
    // this.setState({passwordContainer: filteredPasswordContainer})
    return passwordContainer.filter(eachItem =>
      eachItem.url.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  deleteRecord = id => {
    const {passwordContainer} = this.state
    const filteredPasswordContainer = passwordContainer.filter(e => e.id !== id)

    this.setState({passwordContainer: filteredPasswordContainer})
  }

  render() {
    const {
      passwordContainer,
      inputUrl,
      inputName,
      inputPassword,
      showPassword,
    } = this.state
    const searchResults = this.searchPasswordContainer()
    console.log(passwordContainer)
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="app-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </div>
          <div className="card-container manager-container">
            <img
              src=" https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="manager-image"
            />
            <div className="card form-container">
              <form
                className="card-responsive"
                onSubmit={this.addPasswordRecord}
              >
                <h1 className="form-heading">Add New Password</h1>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                    />
                  </div>

                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Website"
                    value={inputUrl}
                    onChange={this.onInputUrlChange}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                    />
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Username"
                    value={inputName}
                    onChange={this.onInputNameChange}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                  </div>
                  <input
                    className="input"
                    type="password"
                    placeholder="Enter Password"
                    value={inputPassword}
                    onChange={this.onInputPasswordChange}
                  />
                </div>
                <div className="btn-container">
                  <button
                    className="add-btn"
                    type="submit"
                    onClick={this.addRecords}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card-container">
            <div className="card-responsive no-password-container">
              <div className="passwords-header">
                <h1 className="passwords-header-title">
                  Your Passwords
                  <p className="results-count"> {searchResults.length}</p>
                </h1>
                <div className="search-container">
                  <div className="search-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                      alt="search"
                      className="search-icon"
                    />
                  </div>
                  <input
                    className="search-input"
                    type="search"
                    placeholder="Search"
                    onChange={this.onSearchInput}
                  />
                </div>
              </div>
              <hr className="hr-line" />
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id="checkbox"
                  onChange={this.onCheckboxClick}
                />
                <label htmlFor="checkbox" className="checkbox-label">
                  Show Passwords
                </label>
              </div>
              {searchResults.length !== 0 ? (
                <ul className="passwords-list-container">
                  {searchResults.map(eachRecord => (
                    <Password
                      key={eachRecord.id}
                      record={eachRecord}
                      deleteRecord={this.deleteRecord}
                      showPassword={showPassword}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-password-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-passwords-image"
                  />
                  <p className="no-passwords-title">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager

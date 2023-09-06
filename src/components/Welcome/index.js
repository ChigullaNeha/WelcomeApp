import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttonClicked: false}

  onChangeBtn = () => {
    const {buttonClicked} = this.state
    this.setState({buttonClicked: !buttonClicked})
  }

  render() {
    const {buttonClicked} = this.state
    return (
      <div className="container">
        <div className="scnd-container">
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank you! Happy Learning</p>
          {buttonClicked ? (
            <button type="button" onClick={this.onChangeBtn} className="button">
              Subscribed
            </button>
          ) : (
            <button type="button" onClick={this.onChangeBtn} className="button">
              Subscribe
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default Welcome

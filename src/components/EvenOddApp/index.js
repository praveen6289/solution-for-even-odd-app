// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const message = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Count {count}</h1>
          <p className="sub-heading">Count is {message}</p>
          <div>
            <button
              type="button"
              className="increment-button"
              onClick={this.onIncrement}
            >
              Increment
            </button>
          </div>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  incrementNumber = () => {
    const getRandomNuber = this.randomNumber()
    this.setState(prevState => ({count: prevState.count + getRandomNuber}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {text}</p>
          <button
            className="button"
            type="button"
            onClick={this.incrementNumber}
          >
            Increment
          </button>
          <p className="notes">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

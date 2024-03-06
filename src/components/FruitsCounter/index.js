// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatmangoes = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatbananas = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="card-image"
              />
              <button className="button" onClick={this.eatmangoes}>
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="card-image"
              />
              <button className="button" onClick={this.eatbananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

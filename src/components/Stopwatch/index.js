// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {minutes: 0, seconds: 0}

  tick = () => {
    const {minutes, seconds} = this.state
    if (seconds > 59) {
      this.setState(prevState => ({minutes: prevState.minutes + 1, seconds: 0}))
    }
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  startTime = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  stopTime = () => {
    clearInterval(this.timerId)
  }

  resetTime = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    let min
    let sec
    if (minutes < 10) {
      min = `0${minutes}`
    } else {
      min = minutes
    }

    if (seconds < 10) {
      sec = `0${seconds}`
    } else {
      sec = seconds
    }

    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="time-image-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="para">Timer</p>
            </div>
            <div className="time">
              <h1 className="heading1">
                {min}:{sec}
              </h1>
            </div>
            <div className="buttons-cont">
              <button className="btn" type="button" onClick={this.startTime}>
                Start
              </button>
              <button className="btn1" type="button" onClick={this.stopTime}>
                Stop
              </button>
              <button className="btn2" type="button" onClick={this.resetTime}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch

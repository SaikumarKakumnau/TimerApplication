// import logo from './logo.svg';
import { Component } from 'react'
import './App.css';

class App extends Component {
  state = { isTimeRunning: true, timeinSec: 30, timeinMin: 0 };

  decrementSec = () => {
    const {timeinMin, timeinSec } = this.state;
    const isTimerCompleted = timeinSec === timeinMin * 60
    if (isTimerCompleted) {
      this.clearTimerInterval()
    }

    this.setState(prevState => ({ timeinSec: prevState.timeinSec - 1 }))
    // this.setState(prevState => ({isTimeRunning: !prevState.isTimeRunning}))
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  componentDidMount() {
    this.getTimeElapsed();
  }

  clearTimerInterval = () => clearInterval(this.intervalId);

  getTimeElapsed = () => {

    this.intervalId = setInterval(this.decrementSec, 1000)
  }
  

  timerElapsedsecInFormat = () => {
    const { timeinSec, timeinMin } = this.state;
    const remainTime = timeinSec - timeinMin * 60
    const minutes = Math.floor(remainTime / 60)
    console.log(minutes)
    const sec = Math.floor(remainTime % 60)
    console.log(sec)
    const stringFiedMin = minutes > 9 ? minutes : `0${minutes}`;
    const stringFiedSec = sec > 9 ? sec : `0${sec}`;

    return `${stringFiedMin} : ${stringFiedSec}`;
    

  }

  AddTimerInSec = () => {
    const {timeinSec} = this.state;
    this.setState(prevState => ({timeinSec: prevState.timeinSec + 10 }));
    if(timeinSec === 0) {
      this.getTimeElapsed();
    }

  }

  skipTimer = () => {
  
    this.setState({ timeinMin: 0, timeinSec: 0 })
    this.clearTimerInterval();
  }

  render() {
    // const {timeinSec, timeinMin} = this.state;
    return (
      <div className='App'>
        <h1>Routine Starting in...</h1>
        <div className='timer-container'>
          <h1>{this.timerElapsedsecInFormat()}</h1>
        </div>

        <div>
          <button onClick={this.AddTimerInSec}>+ 10</button>
          <button onClick={this.skipTimer}>Skip</button>
        </div>
      </div>
    )
  }
}

export default App;

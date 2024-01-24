// import logo from './logo.svg';
import { useEffect, useState} from 'react'
import CountTimer from './components/CountTimer';
import './App.css';


const App = () => {
  const [timeDuration, setDuration] = useState(30);
  const [isTimeRuning, setTimeRunning] = useState(false)
  const [timeKey, setKey] = useState(0)

  const handleTimerComplete = () => {
    setDuration(0);
    setKey((prevKey) => prevKey + 1)
  }

  const AddTimer = () => {
    setDuration((prevState => prevState + 10))
    setKey((prevKey) => prevKey + 1)
  }

  const SkipTimer = () => {
    setDuration(0)
    setKey((prevKey) => prevKey + 1)
  }

  useEffect(() => {
    setTimeRunning(true)
  },[]);

  return(
    <div className='main-container'>
      <div className='heading-container'>
        <h4 className='heading'>Routine starting in...</h4>
        <p className='para'>subheading here</p>
      </div>
      <CountTimer key={timeKey} duration={timeDuration} onTimerComplete={handleTimerComplete} />
      
      <div className='button-container'>
        <button className='add' onClick={AddTimer}>+ 10 sec</button>
        <button className='skip' onClick={SkipTimer}>Skip</button>
      </div>
    </div>
  )

}


 export default App;

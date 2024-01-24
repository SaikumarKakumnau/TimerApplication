import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './index.css';

const CountTimer = (props) => {
    const { key, duration, onTimerComplete } = props
    const [timeKeyProp, setKeyProp] = useState(key)

    const formateTime = (t) => {
        const minutes = Math.floor(t / 60)
        const seconds = t % 60

        const stringFiedMin = minutes > 9 ? minutes : `0${minutes}`;
        const stringFiedSec = seconds > 9 ? seconds : `0${seconds}`;

        return `${stringFiedMin} : ${stringFiedSec}`;
    }

    useEffect(() => {
        setKeyProp(key)
    },[timeKeyProp]);

    return (
        <div className='timer-container'>
            <CountdownCircleTimer
                key={timeKeyProp}
                isPlaying
                duration={duration}
                onComplete={onTimerComplete}
                colors={['#004777', '#F7B801', '#A30000', '#A3000']}
                rotation='counterclockwise'
            >
                {({ remainingTime, animatedColor }) => (
                    <div className='another-container'>
                        <div className='display-time'>{formateTime(remainingTime)}</div>
                        <div style={{ color: animatedColor }}>
                            <svg
                                className='timer-svg'
                                width={60}
                                height={60}
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <circle
                                    r='20'
                                    cx={40}
                                    cy={40}
                                    fill='transparent'
                                    strokeWidth={10}
                                    stroke={animatedColor}
                                />
                            </svg>
                        </div>
                    </div>
                )}
            </CountdownCircleTimer>
        </div>
    )
}

export default CountTimer
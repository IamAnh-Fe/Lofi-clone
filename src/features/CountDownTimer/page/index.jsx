import React, {useState} from 'react'
const CountDownTimer = ({seconds,
  minutes,
  hours,
  isRunning,
  pause,
  resume,
  setTimerHandler,
  setTimerStart,
  timerStart}) => {
    const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const setTimerBtnHandler = () => {
    setTimerHandler(hour, minute, second);
    setTimerStart(true);
  };
   const leftHour = hours >= 10 ? hours.toString()[0] : '0';
  const rightHour = hours >= 10 ? hours.toString()[1] : hours.toString();
   const leftMinute = minutes >= 10 ? minutes.toString()[0] : '0';
  const rightMinute = minutes >= 10 ? minutes.toString()[1] : minutes.toString(); 
  const leftSecond = seconds >= 10 ? seconds.toString()[0] : '0';
  const rightSecond = seconds >= 10 ? seconds.toString()[1] : seconds.toString();
  return (
    
     <div className='countDown'>
      {timerStart ? (
        <div className='countDown-running'>
          <div className='countDown-time'>
             <span className='countDown-digit'>{leftHour}</span>
             <span className='countDown-digit'>{rightHour }</span>
                <span className='countDown-container'>
        <span className='countDown-separator' />
        <span className='countDown-separator' />
      </span>
             <span className='countDown-digit'>{leftMinute}</span>
             <span className='countDown-digit'>{rightMinute}</span>
                <span className='countDown-container'>
        <span className='countDown-separator' />
        <span className='countDown-separator' />
      </span>
             <span className='countDown-digit'>{leftSecond}</span>
             <span className='countDown-digit'>{rightSecond}</span>

          </div>
          <div className='countDown-controller'>
            <button
              className='countDown-buttonTimer'
              onClick={() => setTimerHandler(0, 0, 0)}
            >
              Cancel
            </button>
            {isRunning ? (
              <button className='countDown-buttonTimer' onClick={pause}>
                Pause
              </button>
            ) : (
              <button className='countDown-buttonTimer' onClick={resume}>
                Resume
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className='countDown-notRun'>
          <div className='countDown-inputList'>
            <div className='countDown-input'>
              <span>hour</span>
            <input
              className='countDown-number'
              type='number'
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              max={24}
              min={0}
            />
            </div>
            <div className='countDown-input'>
              <span>min</span>
            <input
              className='countDown-number'
              type='number'
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              max={60}
              min={0}
            />
           </div>
            <div className='countDown-input'>
              <span>sec</span>
            <input
              className='countDown-number'
              type='number'
              value={second}
              onChange={(e) => setSecond(e.target.value)}
              max={60}
              min={0}
            />
            </div>
          </div>

          <button className='countDown-setup' onClick={setTimerBtnHandler}>
            Start
          </button>
        </div>
      )}
    </div>
  )
}

export default CountDownTimer
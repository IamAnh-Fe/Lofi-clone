import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import nightClear from "../../../../assets/video/Night-clear.mp4"
import nightRain from "../../../../assets/video/Night-rainny.mp4"
import dayClear from "../../../../assets/video/Day-sunny.mp4"
import dayRain from "../../../../assets/video/Day-rainny.mp4"
import RainButton from '../RainButton';
import ModifierBoard from '../ModifierBoard';
const Home = () => {
     const [timerStart, setTimerStart] = useState(false);

    const daynight = useSelector((state) => state.mode.mode);
  const rain = useSelector((state) => state.rain);

      const combineMode = `${daynight}-${rain.rainMode}`;
console.log(combineMode)
  return (
    <div>  
        <video
        className={combineMode === 'night-clear' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src={nightClear} type='video/mp4' />
      </video>
      <video
        className={combineMode === 'night-rain' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src={nightRain} type='video/mp4' />
      </video>
      {/* Day */}
      <video
        className={combineMode === 'day-clear' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src={dayClear} type='video/mp4' />
      </video>
      <video
        className={combineMode === 'day-rain' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src={dayRain} type='video/mp4' />
      </video>
      <RainButton/>
      <ModifierBoard/>
      </div>
  )
}

Home.propTypes = {}

export default Home
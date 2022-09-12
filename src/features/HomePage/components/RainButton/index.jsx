import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import { BiCircle } from 'react-icons/bi';

import { changeRainStatus } from '../../../../redux/rainSlice';
const RainButton = () => {
    const dispatch = useDispatch();
  const rain = useSelector((state) => state.rain);
  const [buttonClick, setButtonClick] = useState(false);
console.log(rain.rainValue)
  const handleRain = () => {
    if (rain.rainValue === 0) 
    dispatch(changeRainStatus(30));
    else dispatch(changeRainStatus( 0));
    setButtonClick(!buttonClick);
  };
  return (

    <div className='rainButton'>
  {buttonClick && (
        <ReactAudioPlayer
          preload='auto'
          autoPlay
          src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631342/lofi/rain_city_xkvnug.mp3'
          loop
          volume={rain.rainValue / 100}
        />
      )}
      <div className='rainButton-button'  onClick={handleRain}>
       <span className='rainButton-icon'><BiCircle/></span>
      </div>
    </div>
  )
}

export default RainButton
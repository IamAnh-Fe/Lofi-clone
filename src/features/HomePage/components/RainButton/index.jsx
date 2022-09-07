import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import { AiOutlineCloud } from 'react-icons/ai';
import { BsCloudRainFill } from 'react-icons/bs';
import { changeRainStatus } from '../../../../redux/rainSlice';
import rainSound from "../../../../assets/sound/rain_city.mp3"
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
          src={rainSound}
          loop
          volume={rain.rainValue / 100}
        />
      )}
      <div className='rainButton-button'  onClick={handleRain}>
       {
        buttonClick ? <span className='rainButton-icon'><BsCloudRainFill/></span> 
        : <span className='rainButton-icon'><AiOutlineCloud/></span>
       }
      </div>
    </div>
  )
}

export default RainButton
import React, { useState } from 'react';
import logo from "../../../../assets/icons/lofi-logo.gif";
import { Link } from 'react-router-dom';
import { AiFillGithub, AiOutlineExpand } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsFillSunFill, BsFillVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { setMode } from '../../../../redux/modeSlice';
import { changePlaying } from '../../../../redux/volumeSlice';

import { useTime } from 'react-timer-hook';

const Header = () => {
    const [fullscreen, setFullscreen] = useState(false);
    const dispatch = useDispatch();
    const daynight = useSelector((state) => state.mode.mode);
    const playing = useSelector((state) => state.volume.isPlaying);

    const daynightHandler = () => {
   dispatch(setMode())
    };
 const handleMute = () => {
   dispatch(changePlaying ())
    };
    //Time
 const {
    minutes,
    hours,
    ampm
  } = useTime({ format: '12-hour'});
   const leftHour = hours >= 10 ? hours.toString()[0] : '0';
  const rightHour = hours >= 10 ? hours.toString()[1] : hours.toString();
   const leftMinute = minutes >= 10 ? minutes.toString()[0] : '0';
  const rightMinute = minutes >= 10 ? minutes.toString()[1] : minutes.toString();
  //Fullscreen
 const fullscreenHandler = () => {
    if (!fullscreen) {
      setFullscreen(true);
      const e = document.documentElement;
      e.requestFullscreen();
    } else {
      setFullscreen(false);
      if (!document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };
  return (
    <nav className='header'>
   <div className='header-list'>
    <div className='header-left'>
   <Link to='/'>
        <img className='header-logo' src={logo} alt='logo-LoFi' />
      </Link>
    </div>
     <div className='header-center'>
     <a target='_blank'
     className='header-github'
          rel='noreferrer'
          href='https://github.com/IamAnh-Fe/Lofi-clone'>
            <AiFillGithub /> GitHub
      </a>
    </div>
    <div className='header-right'>
      <div className='header-time'>
       <span>{leftHour}</span><span>{rightHour}</span>
       : <span>{leftMinute}</span><span>{rightMinute}</span><span> {ampm}</span>
      </div>
   <span className='header-icon' onClick={handleMute}>
     {playing  ? (
       <BsFillVolumeDownFill/>
         ) : (
      <BsFillVolumeMuteFill/>          
      )}
    </span>
     <span className='header-icon' onClick={fullscreenHandler}>
   <AiOutlineExpand/>
    </span>
     <span className='header-icon' onClick={daynightHandler}>
      {
        daynight === 'day' ? <BsFillSunFill/> : <BsFillMoonStarsFill/>
      }
    </span>

    </div>

   </div>
    </nav>
  )
}

export default Header
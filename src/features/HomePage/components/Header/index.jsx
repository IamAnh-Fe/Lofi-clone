import React, { useState } from 'react';
import logo from "../../../../assets/icons/lofi-logo.gif";
import { Link } from 'react-router-dom';
import { AiFillGithub, AiOutlineExpand } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { setMode } from '../../../../redux/modeSlice';

const Header = () => {
    const [fullscreen, setFullscreen] = useState(false);
    
    const dispatch = useDispatch();
    const daynight = useSelector((state) => state.mode.mode);
    const daynightHandler = () => {
   dispatch(setMode())
    };
    console.log(daynight)

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
   <div className='header-list row'>
    <div className='l-2'>
   <Link to='/'>
        <img className='header-logo' src={logo} alt='logo-LoFi' />
      </Link>
    </div>
     <div className='l-4'>
     <AiFillGithub /> 
     <span>GitHub</span>
    </div>
     <div className='l-4' onClick={fullscreenHandler}>
   <AiOutlineExpand/>
    </div>
     <div className='l-2' onClick={daynightHandler}>
      {
        daynight === 'day' ? <BsFillSunFill/> : <BsFillMoonStarsFill/>
      }
    </div>

   </div>
    </nav>
  )
}

export default Header
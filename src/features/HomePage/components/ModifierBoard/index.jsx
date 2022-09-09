import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import {BsSliders, BsFillMoonFill} from 'react-icons/bs';
import {FcTodoList} from 'react-icons/fc';
import {FaGuitar, FaCoffee, FaVolumeDown, FaVolumeUp} from 'react-icons/fa';
import { changeMoodStatus } from '../../../../redux/moodSlice';
import {setRain} from '../../../../redux/rainSlice';
import { changeVolume } from '../../../../redux/volumeSlice';
import { useTimer } from 'react-timer-hook';
import CountDownTimer from '../../../CountDownTimer/page';
import TodoList from '../../../TodoList/page';

const ModifierBoard = () => {
  const [timerStart, setTimerStart] = useState(false);

  const dispatch = useDispatch();
  const mood = useSelector((state) => state.mood.moodMode);
  const rain = useSelector((state) => state.rain.rainValue);
  const volume = useSelector((state) => state.volume.volumeValue);
console.log(mood)
   const [openMood, setOpenMood] = useState(false);
  const [openFocus, setOpenFocus] = useState(false);

  const [cityTraffic, setCityTraffic] = useState(0);
  const [cityRain, setCityRain] = useState(rain);
  const [fireplace, setFireplace] = useState(0);
  const [snow, setSnow] = useState(0);
  const [summerStorm, setSummerStorm] = useState(0);
  const [fan, setFan] = useState(0);
  const [forestNight, setForestNight] = useState(0);
  const [wave, setWave] = useState(0);
  const [wind, setWind] = useState(0);
  const [people, setPeople] = useState(0);
  const [river, setRiver] = useState(0);
  const [rainForest, setRainForest] = useState(0);
  
  //countdowntimer
   const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 0);
  
   const { seconds, minutes, hours, isRunning, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => setTimerStart(false),
    });

  const setTimerHandler = (hour, minute, second) => {
    const time = new Date();
    const setupTimer =
      Number(hour) * 3600 + Number(second) + Number(minute) * 60;
    time.setSeconds(time.getSeconds() + setupTimer);
    restart(time);
  };

   const rainSliderHandler = (e) => {
    setCityRain(e.target.value);
    dispatch(setRain(cityRain));   
  };

  const openFocusHandler = () => {
    setOpenFocus(!openFocus);
    setOpenMood(false);
  };

  const openMoodHandler = () => {
    setOpenMood(!openMood);
    setOpenFocus(false);
  };
   const changeMoodHandler = (e) => {
    dispatch(changeMoodStatus(e.target.id));
console.log('e',e.target.id)

  };
  const changeVolumeHandler = (e) => {
    dispatch(changeVolume(e.target.value));
  };

  return (
    <>
    <div className={`modifierBoard ` + (openMood && 'mood ') + (openFocus && ' focus ')}>
 <div className='modifierBoard-icon'>
          <div className={`icon ` + (openMood && 'active')}>
            <i onClick={openMoodHandler}>
              <BsSliders/>
            </i>
          </div>
          {openMood && (
            <div className='modifierBoard-box'>
              <span className='modifierBoard-title'>Mood</span>
              <div className='modifierBoard-options'>
                <div
                  id='sleep'
                  onClick={changeMoodHandler}
                  className={`modifierBoard-item ` + (mood === 'sleep' ? 'active' : '')}
                >
                  <i id='sleep'>
                 <BsFillMoonFill/>
                  </i>
                  <span id='sleep' className='modifierBoard-text'>Sleep</span>
                </div>
                <div
                  id='jazzy'
                  onClick={changeMoodHandler}
                  className={`modifierBoard-item ` + (mood === 'jazzy' ? 'active' : '')}
                  >
                  <i id='jazzy'>
                    <FaGuitar/>
                  </i>
                  <span id='jazzy' className='modifierBoard-text'>Jazzy</span>
                </div>
                <div
                  id='chill'
                  onClick={changeMoodHandler}
                  className={`modifierBoard-item ` + (mood === 'chill' ? 'active' : '')}
                >
                  <i id='chill'>
                    <FaCoffee/>
                  </i>
                  <span id='chill' className='modifierBoard-text'>Chill</span>
                </div>
              </div>
              <div className='modifierBoard-volume'>
           
                    <FaVolumeDown/>
             
                 <input type="range" className='modifierBoard-inputMain' min="0" max="100" value={volume}   onChange={changeVolumeHandler}/>
                    <FaVolumeUp/>
              </div>
              <span className='modifierBoard-title'>Sounds</span>
              <div className='modifierBoard-sounds'>
                <div className='modifierBoard-sound'>
                  <p>City traffic</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src="https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631340/lofi/city_traffic_vbbxoq.mp3"
                    loop
                    volume={cityTraffic / 100}
                  />
                    <input type="range" className='modifierBoard-input' min="0" max="100" value={cityTraffic}  onChange={(e) => setCityTraffic(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>City rain</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631342/lofi/rain_city_xkvnug.mp3'
                    loop
                    volume={rain / 100}
                  />
                    <input type="range" className='modifierBoard-input' min="0" max="100" value={rain}  onChange={rainSliderHandler}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>Fireplace</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631340/lofi/fireplace_c5us9n.mp3'
                    loop
                    volume={fireplace / 100}
                  />
                <input type="range" className='modifierBoard-input' min="0" max="100" value={fireplace}   onChange={(e) => setFireplace(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>Snow</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631343/lofi/snow_u80ggl.mp3'
                    loop
                    volume={snow / 100}
                  />
                 <input type="range" className='modifierBoard-input' min="0" max="100" value={snow}   onChange={(e) => setSnow(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>Summer Storm</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631344/lofi/summer_storm_rhwi01.mp3'
                    loop
                    volume={summerStorm / 100}
                  />
                 <input type="range" className='modifierBoard-input' min="0" max="100" value={summerStorm}    onChange={(e) => setSummerStorm(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>Fan</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631341/lofi/fan_wfhvzd.mp3'
                    loop
                    volume={fan / 100}
                  />
                 <input type="range" className='modifierBoard-input' min="0" max="100" value={fan} onChange={(e) => setFan(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>Forest Night</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631341/lofi/forest_night_dtfbiq.mp3'
                    loop
                    volume={forestNight / 100}
                  />
                 <input type="range" className='modifierBoard-input' min="0" max="100" value={forestNight} onChange={(e) => setForestNight(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>Wave</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631344/lofi/waves_mwvrjo.mp3'
                    loop
                    volume={wave / 100}
                  />
                 <input type="range" className='modifierBoard-input' min="0" max="100" value={wave}   onChange={(e) => setWave(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>Wind</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631343/lofi/wind_w4yxsr.mp3'
                    loop
                    volume={wind / 100}
                  />
                 <input type="range" className='modifierBoard-input' min="0" max="100" value={wind}   onChange={(e) => setWind(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>People</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631342/lofi/people_talk_inside_y0nko0.mp3'
                    loop
                    volume={people / 100}
                  />
                 <input type="range" className='modifierBoard-input' min="0" max="100" value={people}   onChange={(e) => setPeople(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>River</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631342/lofi/river_o2juoa.mp3'
                    loop
                    volume={river / 100}
                  />
                 <input type="range" className='modifierBoard-input' min="0" max="100" value={river}   onChange={(e) => setRiver(e.target.value)}/>
                </div>
                <div className='modifierBoard-sound'>
                  <p>Rain Forest</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='https://res.cloudinary.com/dxk9kfxk1/video/upload/v1662631341/lofi/rain_forest_imrnss.mp3'
                    loop
                    volume={rainForest / 100}
                  />
                 <input type="range" className='modifierBoard-input' min="0" max="100" value={rainForest}   onChange={(e) => setRainForest(e.target.value)}/>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='modifierBoard-icon'>
          <div className={'icon ' + (openFocus && 'active')}>
            <i
              onClick={openFocusHandler}
            >
            <FcTodoList/>
            </i>
          </div>
        </div>
          {openFocus && (
          <div className='modifierBoard-box'>
            <span className='modifierBoard-title'>Focus Mode</span>
            <CountDownTimer
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        isRunning={isRunning}
        pause={pause}
        resume={resume}
        restart={restart}
        setTimerHandler={setTimerHandler}
        setTimerStart={setTimerStart}
        timerStart={timerStart}
            />
            <span className='modifierBoard-title'>To do list</span>
            <TodoList />
            </div>
           )} 
    </div>
    </>
    )
    }

export default ModifierBoard
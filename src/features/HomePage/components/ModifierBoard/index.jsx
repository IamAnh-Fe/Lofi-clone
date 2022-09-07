import React from 'react'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

const ModifierBoard = () => {
  const dispatch = useDispatch();
  const mood = useSelector((state) => state.mood.moodMode);
  const rainValue = useSelector((state) => state.rain.rainValue);
  const volume = useSelector((state) => state.volume.volumeValue);

   const [openMood, setOpenMood] = useState(false);
  const [openFocus, setOpenFocus] = useState(false);

  const [cityTraffic, setCityTraffic] = useState(0);
  const [cityRain, setCityRain] = useState(rainValue);
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


  return (

    <div className={`modifierBoard ` + (openMood && 'mood ') + (openFocus && ' focus ')}>
 <div className='modifier__icon'>
          <div className={`icon ` + (openMood && 'active')}>
            <i onClick={openMoodHandler} className='fas fa-sliders-h fa-2x'></i>
          </div>
          {openMood && (
            <div className='modifierBoard-box'>
              <h4>Mood</h4>
              <div className='modifierBoard-options'>
                <div
                  id='sleep'
                  onClick={changeMoodHandler}
                  className={`modifierBoard` + (moodMode === 'sleep' ? 'active' : '')}
                >
                  <i id='sleep' className='fas fa-moon fa-2x'></i>
                  <span id='sleep'>Sleep</span>
                </div>
                <div
                  id='jazzy'
                  onClick={changeMoodHandler}
                  className={`modifierBoard` + (moodMode === 'jazzy' ? 'active' : '')}
                >
                  <i id='jazzy' className='fas fa-guitar fa-2x'></i>
                  <span id='jazzy'>Jazzy</span>
                </div>
                <div
                  id='chill'
                  onClick={changeMoodHandler}
                  className={`modifierBoard ` + (moodMode === 'chill' ? 'active' : '')}
                >
                  <i id='chill' className='fas fa-coffee fa-2x'></i>
                  <span id='chill'>Chill</span>
                </div>
              </div>
              <div className='volume'>
           
                  <i className='fas fa-volume-down fa-lg'></i>
             
                 <input type="range" min="0" max="100" value={volumeValue}   onChange={changeVolumeHandler}/>

                  <i className='fas fa-volume-up fa-lg'></i>
              </div>
              <h5>Sounds</h5>
              <div className='modifierBoard-sounds'>
                <div className='modifierBoard-sound'>
                  <p>City traffic</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/city_traffic.mp3'
                    loop
                    volume={cityTraffic / 100}
                  />
                    <input type="range" min="0" max="100" value={cityTraffic}  onChange={(e) => setCityTraffic(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>City rain</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/rain_city.mp3'
                    loop
                    volume={rainValue / 100}
                  />
                    <input type="range" min="0" max="100" value={rainValue}  onChange={rainSliderHandler}/>
                </div>
                <div className='noise-option'>
                  <p>Fireplace</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/fireplace.mp3'
                    loop
                    volume={fireplace / 100}
                  />
                <input type="range" min="0" max="100" value={fireplace}   onChange={(e) => setFireplace(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>Snow</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/snow.mp3'
                    loop
                    volume={snow / 100}
                  />
                 <input type="range" min="0" max="100" value={snow}   onChange={(e) => setSnow(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>Summer Storm</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/summer_storm.mp3'
                    loop
                    volume={summerStorm / 100}
                  />
                 <input type="range" min="0" max="100" value={summerStorm}    onChange={(e) => setSummerStorm(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>Fan</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/fan.mp3'
                    loop
                    volume={fan / 100}
                  />
                 <input type="range" min="0" max="100" value={fan} onChange={(e) => setFan(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>Forest Night</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/forest_night.mp3'
                    loop
                    volume={forestNight / 100}
                  />
                 <input type="range" min="0" max="100" value={forestNight} onChange={(e) => setForestNight(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>Wave</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/waves.mp3'
                    loop
                    volume={wave / 100}
                  />
                 <input type="range" min="0" max="100" value={wave}   onChange={(e) => setWave(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>Wind</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/wind.mp3'
                    loop
                    volume={wind / 100}
                  />
                 <input type="range" min="0" max="100" value={wind}   onChange={(e) => setWind(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>People</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/people_talk_inside.mp3'
                    loop
                    volume={people / 100}
                  />
                 <input type="range" min="0" max="100" value={people}   onChange={(e) => setPeople(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>River</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/river.mp3'
                    loop
                    volume={river / 100}
                  />
                 <input type="range" min="0" max="100" value={river}   onChange={(e) => setRiver(e.target.value)}/>
                </div>
                <div className='noise-option'>
                  <p>Rain Forest</p>
                  <ReactAudioPlayer
                    preload='auto'
                    autoPlay
                    src='./assets/musics/rain_forest.mp3'
                    loop
                    volume={rainForest / 100}
                  />
                 <input type="range" min="0" max="100" value={rainForest}   onChange={(e) => setRainForest(e.target.value)}/>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default ModifierBoard
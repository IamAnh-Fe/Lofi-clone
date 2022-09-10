import React, { useState } from 'react';
import { chill, jazzy, sleep } from '../../../../data/song';
import { useSelector } from 'react-redux';
import Player from '../Player';

const Footer = () => {
    const mood = useSelector((state) => state.mood.moodMode);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className='footer'>
    <div className='footer-author'> 
       {mood === 'chill' ? (
          <span>Song name: {chill[currentSongIndex].name}</span>
        ) : mood === 'jazzy' ? (
          <span>Song name: {jazzy[currentSongIndex].name}</span>
        ) : (
          <span>Song name: {sleep[currentSongIndex].name}</span>
        )}</div>
    <div className='footer-player'>
       {mood === 'chill' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={chill}
          />
        ) : mood === 'jazzy' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={jazzy}
          />
        ) : (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={sleep}
          />
        )}
    </div>

    </div>
  )
}

export default Footer
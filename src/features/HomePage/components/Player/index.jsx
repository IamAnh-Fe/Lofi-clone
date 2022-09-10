import React, {useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePlaying } from '../../../../redux/volumeSlice';

import pause from "../../../../assets/icons/pause.svg";
import play from "../../../../assets/icons/play.svg";
import next from "../../../../assets/icons/next.svg";
import prev from "../../../../assets/icons/prev.svg";

const Player = ({ currentSongIndex, setCurrentSongIndex, songs }) => {
  const audioElement = useRef();
  const dispatch = useDispatch();
  const volumeValue = useSelector((state) => state.volume.volumeValue);
  const playing = useSelector((state) => state.volume.isPlaying);

  //Play or pause video
  useEffect(() => {
    if (playing ) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
    audioElement.current.volume = volumeValue / 100;
  });

   const handlePlaying = () => {
   dispatch(changePlaying ())
    };
    const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };
  return (
    <div>
        <div>
            <audio loop src={songs[currentSongIndex].src} ref={audioElement}></audio>
        </div>
        <div>
             <button className='' onClick={() => SkipSong(false)}>
          <img src={prev} alt='prev' />
        </button>
        <button className='' onClick={handlePlaying}>
          {playing  ? (
            <img src={pause} alt='pause' />
          ) : (
            <img src={play} alt='play' />
          )}
        </button>
        <button className='' onClick={() => SkipSong()}>
          <img src={next} alt='next' />
        </button>
        </div>

    </div>
  )
}

export default Player
import React, { useRef } from 'react'
import Video from "../../assets/about-video.mp4";
import "./VideoPlayer.css";

const VideoPlayer = ({playState, setPlayState}) => {


const player = useRef(null)

const closePlayer = (e) =>{
  if(e.target === player.current){
    setPlayState(false)
  }
}

  return (
    <>
    <div className={`video-player ${playState ? '' : 'hide'}` } ref={player} onClick={closePlayer}>
    <video src={Video} autoPlay muted controls></video>
    </div>
    </>
  )
}

export default VideoPlayer;


import './Videoplayer.css';
import react_video from '../../assets/ui-video.mp4';
import { useRef } from 'react';

 const Videoplayer = ({playstate,setPlaystate})=>{

   const player = useRef(null);

    const closePlayer = (e) =>{
        if(e.target===player.current){
            setPlaystate(false);
        }
    }

  return (
    <div className={`video-player ${playstate?'':'hide'}`} ref={player}
      onClick={closePlayer}>
     
      <video src={react_video} autoPlay muted controls/>
    </div>
  )
}

export default Videoplayer

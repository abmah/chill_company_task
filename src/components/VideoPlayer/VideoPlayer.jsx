import VideoBackground from '../../assets/video_background.jpg';
import Pause from '../icons/Pause.svg';
import { useState } from 'react';


// this component should recieve props but for now it will be empty
// since this is just a demo


// this is not a valid video component for that i 
// would have to use a video player library like react-player


const VideoPlayer = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative w-full max-w-2xl rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <div className="absolute inset-0">
          <img
            src={VideoBackground}
            alt="Video background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-gray-200 cursor-pointer">
            <img src={Pause} alt="Pause" className="w-4 h-4" />
          </button>

          <div className="flex-1 relative h-[8.38px]">
            <div className="absolute w-full h-full rounded-[4.19px] bg-white opacity-25 z-10"></div>

            <div className="absolute w-3/4 h-full rounded-[4.19px] bg-white opacity-50 z-20"></div>

            <div className="absolute w-1/2 h-full rounded-[4.19px] bg-white opacity-100 z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
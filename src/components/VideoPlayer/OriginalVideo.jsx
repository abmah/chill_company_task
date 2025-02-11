import VideoPlayer from './VideoPlayer';
import NextArrow from '../icons/next.svg';

const OriginalVideo = () => {
  return (
    <div className="original-video p-4 bg-white rounded-lg shadow-sm border border-[#ECECEC] ">
      <div className="video-info mb-3">
        <h3 className="text-gray-900 mb-2 font-bold text-[17px] font-['Plus_Jakarta_Sans']">
          Original video
        </h3>
        <p className="text-gray-500 font-normal text-[14px] font-['Plus_Jakarta_Sans']">
          Lorem ipsum dolor sit ametis.
        </p>
      </div>

      <VideoPlayer className="mb-4" />

      <div className="visit-link mt-4">
        <a href="#" className="text-[#8a8a8a] font-bold text-[11.8px] font-['Plus_Jakarta_Sans'] flex items-center">
          VISIT LINK
          <img src={NextArrow} alt="Next Arrow" className="ml-1 w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default OriginalVideo;
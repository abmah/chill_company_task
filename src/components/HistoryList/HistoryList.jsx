import PropTypes from 'prop-types';
import LinkIcon from '../icons/link.svg';
import FileAudioIcon from '../icons/audio.svg';
import VideoIcon from '../icons/video.svg';
import PhotoIcon from '../icons/photo.svg';
import NextIcon from '../icons/next.svg';



// i guess icons would be predefined or just imported with an icon library
// this approach is just for demo
const getIcon = (type) => {
  switch (type) {
    case "facebook-video":
      return <img src={LinkIcon} alt="Link Icon" className="w-6 h-6" />;
    case "audio":
      return <img src={FileAudioIcon} alt="Audio Icon" className="w-6 h-6" />;
    case "image":
      return <img src={PhotoIcon} alt="Image Icon" className="w-6 h-6" />;
    case "video":
      return <img src={VideoIcon} alt="Video Icon" className="w-6 h-6" />;
    default:
      return <img src={LinkIcon} alt="Link Icon" className="w-6 h-6" />;
  }
};

// probably should choose a better name here
// history list is good tho
const HistoryList = () => {
  const historyItems = [
    {
      type: "facebook-video",
      title: "Facebook video",
      date: "12/12/2024",
      source: "via insert link",
      time: "12:06",
    },
    {
      type: "audio",
      title: "audio",
      date: "12/12/2024",
      source: "uploaded audio",
      time: "12:06",
    },
    {
      type: "image",
      title: "image",
      date: "12/12/2024",
      source: "uploaded image",
      time: "23:00",
    },
    {
      type: "video",
      title: "video",
      date: "12/12/2024",
      source: "uploaded video",
      time: "23:00",
    },
  ];


  const HistoryItem = ({ item }) => (
    <article className="flex items-start gap-6 hover:bg-gray-50 mb-10  rounded transition-colors">
      <div
        className="flex-shrink-0 rounded-lg p-1"
        style={{
          boxShadow: '0 2px 30px 6.7px rgba(97, 101, 215, 0.48)',
          borderRadius: '12px',
        }}
      >
        <figure className="rounded-lg bg-white p-2">
          {getIcon(item.type)}
        </figure>
      </div>
      <div className="flex-1 min-w-0 lg:flex lg:justify-between ">
        <div>
          <header className="mb-2">
            <h3 className="text-sm font-bold text-gray-900 truncate block" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}>
              {item.title}
            </h3>
          </header>
          <div className="text-xs text-gray-400 truncate block mt-2" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px', fontWeight: '400' }}>
            {item.source}
          </div>
        </div>
        <div>
          <time className="text-xs text-gray-400 block" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px', fontWeight: '500' }} dateTime={item.date}>
            {item.date}
          </time>
          <time className="text-xs text-gray-500 flex-shrink-0 block mt-2" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px', fontWeight: '400' }} dateTime={item.date + "T" + item.time}>
            {item.time}
          </time>
        </div>
      </div>
    </article>
  );

  HistoryItem.propTypes = {
    item: PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <section className="bg-white rounded-lg shadow-sm border border-[#ECECEC] p-4 min-w-[315px]">
      <header className="mb-4">
        <h2 className="text-sm font-bold text-gray-700 " style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '17px' }}>
          Previously Scanned Content
        </h2>
        <p className="text-sm text-gray-500 font-normal mt-1 mb-" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '14px' }}>
          Lorem ipsum dolor sit ametis.
        </p>
      </header>

      <main className="space-y-5">
        {historyItems.map((item, index) => (
          <HistoryItem
            key={index}
            item={item}
          />
        ))}
      </main>

      <footer className="flex items-center gap-2 mt-6 pt-3 ">
        <button
          className="text-sm text-gray-400 hover:text-gray-700 font-bold transition-colors"
          style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '12px' }}
          onClick={() => console.log('View all history')}
        >
          SEE ALL HISTORY
        </button>
        <img src={NextIcon} alt="Next Icon" className="h-3" />
      </footer>
    </section>
  );
};

export default HistoryList;
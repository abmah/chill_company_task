import PropTypes from 'prop-types';
import NextArrowIcon from '../icons/blue-arrow.svg';

const colorPalette = ['bg-[#A1BFF2]', 'bg-[#C3ECF4]', 'bg-[#D0FFEE]', 'bg-[#F5D4FF]'];
const textColorPalette = ['text-[#020202]', 'text-[#14769C]', 'text-[#046345]', 'text-[#A155B9]'];

const getPillColorClass = (metricIndex) => {
  const colorIndex = metricIndex % colorPalette.length;
  return {
    bgColorClass: colorPalette[colorIndex],
    textColorClass: textColorPalette[colorIndex],
  };
};

const MetricPill = ({ pillColorClass }) => (

  <span
    className={`${pillColorClass.bgColorClass} ${pillColorClass.textColorClass} rounded-full px-3 py-1 text-xs font-medium font-['Poppins'] h-8 flex items-center text-center justify-center min-w-[120px]`}
  >
    Eye Blinking 0
  </span>
);

MetricPill.propTypes = {
  metric: PropTypes.string,
  pillColorClass: PropTypes.shape({
    bgColorClass: PropTypes.string.isRequired,
    textColorClass: PropTypes.string.isRequired,
  }).isRequired,
};


const DetectionCategory = ({ category, metrics }) => (
  <div className="mb-5 md:flex bg-[#6165D7]/6 rounded-xl md:rounded-full p-4 items-center">
    <div className="w-full md:w-[25%] md:flex-basis-[25%] md:flex-shrink-0 mb-2 md:mb-0 md:text-left">
      <h3 className="text-sm font-semibold font-['Plus_Jakarta_Sans'] mb-0">
        {category}
      </h3>
    </div>
    <div className="flex flex-wrap gap-3 md:gap-6 ml-0 md:ml-4 md:justify-start flex-1">
      {metrics.map((metric, metricIndex) => (
        <MetricPill key={metricIndex} metric={metric} pillColorClass={getPillColorClass(metricIndex)} />
      ))}
    </div>
  </div>
);

DetectionCategory.propTypes = {
  category: PropTypes.string.isRequired,
  metrics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const DetectionDetails = () => {
  const detectionData = [
    {
      category: 'Facial Artifacts',
      metrics: ['Eye Blinking Rate: 0.2', 'Mouth Movement: 0.1', 'Nose Wrinkling: 0.05', 'Eyebrow Raise: 0.15',],
    },
    {
      category: 'Audio Analysis',
      metrics: ['Speech Rate: 150 wpm', 'Volume Level: -25dB'],
    },
    {
      category: 'Temporal & spatial consistency',
      metrics: ['Object Tracking Stability: 95%', 'Scene Consistency Score: 88%', 'Motion Smoothness: 0.9'],
    },
    {
      category: 'Physical Interaction',
      metrics: ['Hand Movement: 0.3', 'Body Posture: 0.7'],
    },
    {
      category: 'Audio Analysis',
      metrics: ['Speech Rate: 160 wpm', 'Volume Level: -22dB'],
    },
    {
      category: 'Temporal & spatial consistency',
      metrics: ['Object Tracking Stability: 92%', 'Scene Consistency Score: 90%', 'Motion Smoothness: 0.92'],
    },
    {
      category: 'Physical Interaction',
      metrics: ['Hand Movement: 0.28', 'Body Posture: 0.75'],
    },
  ];


  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#ECECEC] p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-bold font-['Plus_Jakarta_Sans'] mt-0 mb-1.5">Detection Details</h2>
          <p className="text-sm text-gray-500 font-['Poppins']">
            Detailed breakdown of detection metrics across various categories.
          </p>
        </div>
        <div className="flex  space-x-2 mt-1">
          <a
            href="#"
            className="text-sm font-bold text-[#678AD9] font-['Poppins'] flex items-center space-x-1"
          >
            <span>Export Results</span>
            <img src={NextArrowIcon} alt="Next" className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div>
        {detectionData.map((item, index) => (
          <DetectionCategory key={index} category={item.category} metrics={item.metrics} />
        ))}
      </div>
    </div>
  );
};

export default DetectionDetails;
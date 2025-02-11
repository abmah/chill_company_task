

const VideoDescription = () => {
  // simulating getting data from props or context or redux whatever
  // you get the point
  const descriptionData = {
    title: "Video Description",
    text: "Avancer Apply Processes, Methods, Skills, Knowledge And Experience To Achieve Specific Project Objectives According To The Project Acceptance Criteria Within Agreed Parameters. Project Management Has Final Deliverables That Are Constrained To A Finite Timescale And Budget."
  };

  return (
    <div className="p-4 bg-white rounded-[16px] shadow-sm border border-[#ECECEC]">
      <h2 className="text-gray-900 font-bold text-[14px] font-['Plus_Jakarta_Sans'] mb-5">
        {descriptionData.title}
      </h2>
      <p className="text-gray-500 text-[12.5px] font-['Poppins'] font-normal">
        {descriptionData.text}
      </p>
    </div>
  );
};

export default VideoDescription;
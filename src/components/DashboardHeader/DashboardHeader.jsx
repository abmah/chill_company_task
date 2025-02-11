import { useEffect, useState } from 'react';
import KeyWord from '../icons/keyword.svg';
import Analyze from '../icons/analyze.svg';

const DashboardHeader = () => {

  const [userName, setUserName] = useState('');
  // this is stupid i know but its meant to be dynamic
  // like getting it from an api or using prop drilling or context


  const setUserNameHandler = () => {
    setUserName('Mohamed');
  }
  useEffect(() => {
    setUserNameHandler();
    // this is just to get rid of the warning
    // because im using vite and instead of yellow it makes it red

  }, [])


  return (
    <header className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-top font-poppins">
      <div className="mb-4 sm:mb-0">
        <div>
          <strong className="text-sm font-bold text-gray-900 ">Hey {userName}</strong>
          <span className="text-sm font-normal text-gray-500 ml-1 ">- here&apos;s your content verification for today</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center sm:justify-start">
        <button
          className="bg-[#668ade] hover:bg-[#526bb0] text-[#F6F8F9] font-semibold rounded-[100px] flex items-center justify-center
                     w-full sm:w-[164px] text-xs h-[44.49px]"
        >
          <img src={KeyWord} alt="Insert Keyword Icon" className="w-8 h-8 mr-2" />
          Insert Keyword
        </button>
        <button
          className="bg-[#893976] hover:bg-[#6b2d5a] text-[#F6F8F9] font-semibold rounded-[100px] flex items-center justify-center
                       w-full sm:w-[164px] text-xs h-[44.49px]">
          <img src={Analyze} alt="Analyze Icon" className="w-4 h-4 mr-2" />
          Analyze
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
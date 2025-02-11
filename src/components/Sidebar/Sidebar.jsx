import { useState } from 'react';
import Bell from '../icons/sidebar/bell.svg'
import Docs from '../icons/sidebar/docs.svg'
import Settings from '../icons/sidebar/settings.svg'
import History from '../icons/sidebar/history.svg'
import Pie from '../icons/sidebar/pie.svg'
import ProfileImage from '../icons/Person.png'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);


  // if you are inside this component then you might think that i over complicated it a bit
  // you are right but the reason is i dont have a reference on how the sidebar should look like
  // on mobile so you have to take this into consideration

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={toggleSidebar}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`fixed xl:relative top-4 left-4 xl:left-auto bg-[#893976] w-20 rounded-[50px] pt-8 pb-8 flex flex-col items-center font-poppins text-white max-h-[756.34px]
                   transition-transform duration-300 transform xl:translate-x-0 cursor-pointer
                   ${isOpen ? 'translate-x-0' : '-translate-x-full '}
                   xl:block xl:ml-4 z-[110] sm:z-[100] xl:z-1`}
      >
        <div className="text-center flex flex-col items-center">
          <p className="font-bold text-xs mb-6">Menu</p>

          <div className="bg-[#98438A] rounded-[15px] p-2 mb-6 cursor-pointer hover:bg-[#98438A] hover:rounded-[15px] transition-colors duration-200">
            <img src={Pie} alt="Pie" className="w-5 h-5" />
          </div>

          <div className="mb-6 cursor-pointer hover:bg-[#98438A] hover:rounded-[15px] p-2 transition-colors duration-200">
            <img src={Docs} alt="Docs" className="w-5 h-5" />
          </div>
          <div className="mb-24 cursor-pointer hover:bg-[#98438A] hover:rounded-[15px] p-2 transition-colors duration-200">
            <img src={History} alt="History" className="w-5 h-5" />
          </div>
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="mb-6 cursor-pointer hover:bg-[#98438A] hover:rounded-[15px] p-2 transition-colors duration-200">
            <img src={Bell} alt="Bell" className="w-5 h-5" />
          </div>
          <div className="mb-1 cursor-pointer hover:bg-[#98438A] hover:rounded-[15px] p-2 transition-colors duration-200">
            <img src={Settings} alt="Settings" className="w-5 h-5" />
          </div>
          <hr className="border-t border-[#D0D5DD] w-12 my-6" />
        </div>

        <div className="text-center flex flex-col items-center">
          <p className="font-bold text-xs mb-2">Profile</p>
          <div className="w-12 h-12 rounded-full overflow-hidden flex justify-center items-center">
            <img src={ProfileImage} alt="Profile" className="w-10 h-auto rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import AvancerLogo from '../icons/avancer.ai@2x.svg';
import SearchIcon from '../icons/search.svg';
import BellIcon from '../icons/Bell.svg';
import MailIcon from '../icons/mail.svg';
import PersonIcon from '../icons/Person.png';

const MailNotification = ({ count }) => {
  if (count <= 0) return null;

  return (
    <span
      className="absolute font-plus-jakarta -top-1 -right-1 bg-[#893976] text-white text-[10px] font-bold min-w-[20px] h-5 aspect-square inline-flex items-center justify-center rounded-full"
      aria-label={`${count > 9 ? '9+' : count} Unread messages`}
    >
      {count > 9 ? '9+' : count}
    </span>
  );
};
// inline component because why not

MailNotification.propTypes = {
  count: PropTypes.number.isRequired,
};
// instead of this just use typescript 
// i didnt because it takes longer to set up

function Header() {
  const [mailCount, setMailCount] = useState(2);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center p-4 w-full md:w-[90%] mx-auto justify-between">
        <div className="hidden md:flex items-center w-[120px] shrink-0">
          <img
            src={AvancerLogo}
            alt="avancer.ai logo"
            className="h-8 w-auto"
            style={{ width: '120px' }}
          />
        </div>

        <form className="w-full md:w-[68%] mx-2 md:mx-8 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src={SearchIcon} alt="Search" className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="search"
            placeholder="Type to search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
             font-plus-jakarta text-[14px] leading-[18px]"
            aria-label="Search"
          />

        </form>

        <nav className="flex items-center shrink-0 space-x-3 md:space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Notifications">
            <img src={BellIcon} alt="Notifications" className="h-6 w-6" aria-hidden="true" />
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-full relative" aria-label="Messages">
            <img src={MailIcon} alt="Messages" className="h-6 w-6" aria-hidden="true" />
            <MailNotification count={mailCount} />
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Profile">
            <img src={PersonIcon} alt="Profile" className="h-8 w-8 rounded-full" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
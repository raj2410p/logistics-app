import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDatabase, faWallet, faGears } from '@fortawesome/free-solid-svg-icons';
const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`flex flex-col min-h-screen bg-slate-200 dark:text-white ${isOpen ? 'w-64' : 'w-20'} transition-width duration-300`}>

      {/* Navigation Menu */}
      <div className="flex-grow">
        <ul className="mt-6 p-0">
          <li className="hover:bg-indigo-400">
            <a href="#" className="flex items-center px-4 py-3 space-x-3">
              <FontAwesomeIcon icon={faHouse} size='xl' />
              {isOpen && <span>Dashboard</span>}
            </a>
          </li>
          <li className="hover:bg-indigo-400">
            <a href="#" className="flex items-center px-4 py-3 space-x-3">
              <FontAwesomeIcon icon={faDatabase} size='xl' />
              {isOpen && <span>History</span>}
            </a>
          </li>
          <li className="hover:bg-indigo-400">
            <a href="#" className="flex items-center px-4 py-3 space-x-3">
              <FontAwesomeIcon icon={faWallet} size='xl' />
              {isOpen && <span>Wallet</span>}
            </a>
          </li>
          <li className="hover:bg-indigo-400">
            <a href="#" className="flex items-center px-4 py-3 space-x-3">
              <FontAwesomeIcon icon={faGears} size='xl' />
              {isOpen && <span>Settings</span>}
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
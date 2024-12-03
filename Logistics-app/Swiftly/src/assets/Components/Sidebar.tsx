const Sidebar = () => {
    return (
      <div className="h-screen w-64 bg-white text-gray-800 flex flex-col">
        {/* Logo */}
  
        {/* Navigation Menu */}
        <div className="flex-grow">
          <ul className="mt-6">
            {/* Menu Items */}
            <li className="hover:bg-indigo-400">
              <a href="#" className="flex items-center px-4 py-3 space-x-3 text-gray-800">
                <span className="text-xl">🏠</span>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="hover:bg-indigo-400">
              <a href="#" className="flex items-center px-4 py-3 space-x-3 text-gray-800">
                <span className="text-xl">👥</span>
                <span>Team</span>
              </a>
            </li>
            <li className="hover:bg-indigo-400">
              <a href="#" className="flex items-center px-4 py-3 space-x-3 text-gray-800">
                <span className="text-xl">📁</span>
                <span>Projects</span>
              </a>
            </li>
            <li className="hover:bg-indigo-400">
              <a href="#" className="flex items-center px-4 py-3 space-x-3 text-gray-800">
                <span className="text-xl">📅</span>
                <span>Calendar</span>
              </a>
            </li>
            <li className="hover:bg-indigo-400">
              <a href="#" className="flex items-center px-4 py-3 space-x-3 text-gray-800">
                <span className="text-xl">📄</span>
                <span>Documents</span>
              </a>
            </li>
            <li className="hover:bg-indigo-400">
              <a href="#" className="flex items-center px-4 py-3 space-x-3 text-gray-800">
                <span className="text-xl">📊</span>
                <span>Reports</span>
              </a>
            </li>
          </ul>
        </div>
  
        {/* Your Teams */}
        <div className="mt-6 px-4">
          <h3 className="text-sm font-semibold text-indigo-200 uppercase">
            Your Teams
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center space-x-3">
              <span className="h-8 w-8 rounded-full bg-indigo-300 text-center leading-8 font-bold">H</span>
              <span>Heroicons</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="h-8 w-8 rounded-full bg-indigo-300 text-center leading-8 font-bold">T</span>
              <span>Tailwind Labs</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="h-8 w-8 rounded-full bg-indigo-300 text-center leading-8 font-bold">W</span>
              <span>Workcation</span>
            </li>
          </ul>
        </div>
  
        {/* Footer Settings */}
        <div className="mt-auto">
          <a
            href="#"
            className="flex items-center px-4 py-3 space-x-3 hover:bg-indigo-100"
          >
            <span className="text-xl">⚙️</span>
            <span>Settings</span>
          </a>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  
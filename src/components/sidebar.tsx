import logo from '../assets/images/logo.png'

interface SidebarProps {
  isSidebarOpen: boolean;
}

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
  return <>
    <div
      className={`fixed top-0 left-0 w-full max-w-[350px] h-full shadow-lg p-10 bg-[#0d3f62] ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="relative flex flex-col justify-start h-full">
        <div className="w-full"><img src={logo} alt="logo" /></div>
        <div className="text-center mt-9 mb-15 font-bold text-white text-base">Software & Web Developement Company -
          Umbraco Gold Partner
        </div>
        <ul className="text-white text-sm list-none m-0 p-0">
          <li className="font-bold pt-3 pb-3 border-b-1 border-b-[#6a94a5]"><a href=""
                                                                               className="flex items-center"><img
            src={logo} className="w-4 mr-1" alt="" />Home</a></li>
          <li className="font-bold pt-3 pb-3 border-b-1 border-b-[#6a94a5]"><a href=""
                                                                               className="flex items-center"><img src=""
                                                                                                                  className="w-4 mr-1"
                                                                                                                  alt="" />Cards</a>
          </li>
          <li className="font-bold pt-3 pb-3 border-b-1 border-b-[#6a94a5]"><a href=""
                                                                               className="flex items-center"><img src=""
                                                                                                                  className="w-4 mr-1"
                                                                                                                  alt="" />Transaction</a>
          </li>
          <li className="font-bold pt-3 pb-3 "><a href="" className="flex items-center"><img src="" className="w-4 mr-1"
                                                                                             alt="" />Settings</a></li>
        </ul>
        <div className="grow flex items-end w-full text-white text-base font-bold"><img src="" className="w-4 mr-1"
                                                                                        alt="" />Logout
        </div>
      </div>
    </div>
  </>
}
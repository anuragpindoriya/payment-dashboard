import logo from '@/assets/images/logo.png'
import { CreditCard, House, LogOut, Settings, Settings2, X } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const isMobile = useIsMobile()
  const handelSidebarClose = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full max-w-[350px] h-full shadow-lg p-10 bg-[#0d3f62] z-70
  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
  transition-transform duration-300 ease-in-out`}
      >
        <div className="relative flex flex-col justify-start h-full">
          {isMobile && (
            <button
              className="absolute top-[-32px] right-[-32px] text-white bg-transparent p-2 rounded-md hover:bg-white/20 transition"
              onClick={handelSidebarClose}
            >
              <X size={24} />
            </button>
          )}
          <div className="w-full">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-center mt-9 mb-15 font-bold text-white text-base">
            Software & Web Development Company - Umbraco Gold Partner
          </div>
          <ul className="text-white text-sm list-none m-0 p-0">
            <li className="font-bold pt-3 pb-3 border-b border-b-[#6a94a5]">
              <a href="#" className="flex items-center">
                <House className="mr-1" width="17px" /> Home
              </a>
            </li>
            <li className="font-bold pt-3 pb-3 border-b border-b-[#6a94a5] text-[#0FA1DB]">
              <a href="#" className="flex items-center">
                <CreditCard className="mr-1" width="17px" /> Cards
              </a>
            </li>
            <li className="font-bold pt-3 pb-3 border-b border-b-[#6a94a5]">
              <a href="#" className="flex items-center">
                <Settings2 className="mr-1" width="17px" /> Transaction
              </a>
            </li>
            <li className="font-bold pt-3 pb-3">
              <a href="#" className="flex items-center">
                <Settings className="mr-1" width="17px" /> Settings
              </a>
            </li>
          </ul>
          <div className="grow flex items-end w-full text-white text-base font-bold">
            <LogOut className="mr-1" width="17px" /> Logout
          </div>
        </div>
      </div>
    </>
  )
}

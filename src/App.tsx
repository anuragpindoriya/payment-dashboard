import './App.css'
import Navbar from '@/components/navbar.tsx'
import CardManager from '@/components/cards-manager/card-manager.tsx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb.tsx'
import Sidebar from '@/components/sidebar.tsx'
import { useState } from 'react'

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>

      {/* sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div
        className={`${!isSidebarOpen ? 'w-full' : 'w-[calc(100%-350px)] translate-x-[350px]'} transition-all duration-300 ease-in-out`}>

        {/* navbar */}
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/*create paper for bg*/}
        <div className={'bg-[#eceff1] w-full h-fit pt-[18px]'}>
          <div className={'text-[14px] text-[#0C3F62] font-normal'}>
            <Breadcrumb className={'mx-[34px]'}>
              <BreadcrumbList className={'text-[#0C3F62]'}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Cards</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <CardManager></CardManager>
          </div>
          <div className={'w-full h-[35px] text-center bg-[#6A94A5] flex justify-center items-center text-white'}>
            © 2025 GIRIRAJ DIGITAL All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  )
}

export default App

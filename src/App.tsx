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

function App() {


  return (
    <>
      <Navbar></Navbar>

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
      {/*<div className="[--header-height:calc(--spacing(14))]">*/}
      {/*<SidebarProvider className="flex flex-col">*/}
      {/*  <SiteHeader />*/}
      {/*  <div className="flex flex-1">*/}
      {/*    <AppSidebar />*/}
      {/*    <SidebarInset>*/}
      {/*      <div className="flex flex-1 flex-col gap-4 p-4">*/}
      {/*        <div className="grid auto-rows-min gap-4 md:grid-cols-3">*/}
      {/*          <div className="bg-muted/50 aspect-video rounded-xl" />*/}
      {/*          <div className="bg-muted/50 aspect-video rounded-xl" />*/}
      {/*          <div className="bg-muted/50 aspect-video rounded-xl" />*/}
      {/*        </div>*/}
      {/*        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />*/}
      {/*      </div>*/}
      {/*    </SidebarInset>*/}
      {/*  </div>*/}
      {/*</SidebarProvider>*/}

      {/*</div>*/}
    </>
  )
}

export default App

import { Button } from '@/components/ui/button.tsx'
import { AlignJustify, ChevronDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'


interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) {
  return <>
    <div
      className={'sticky top-0 left-0 w-full flex items-center justify-between px-6 py-4 text-[#6A94A5] bg-white shadow-md z-50'}>
      <div className={'flex items-center gap-[16px] '}>
        <Button
          variant="ghost" className="cursor-pointer p-0"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <AlignJustify size={36} />
        </Button>
        <span className={'text-[16px] font-bold'}>Cards</span>
      </div>
      <div className={'flex items-center gap-[2px]'}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ChevronDown />
      </div>
    </div>
  </>
}
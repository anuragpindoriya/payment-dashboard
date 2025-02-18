import { Button } from '@/components/ui/button.tsx'
import { AlignJustify } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'


interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) {
  return <>
    <div className={'w-full flex items-center justify-between px-6 py-4'}>
      <div className={'flex items-center gap-4'}>
        <Button variant="ghost" className="cursor-pointer"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}><AlignJustify /></Button>
        <span>Cards</span>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </>
}
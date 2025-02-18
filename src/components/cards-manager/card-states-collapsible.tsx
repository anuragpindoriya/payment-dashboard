import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'
import { ReactNode, useState } from 'react'

interface CardStatesCollapsibleProps {
  icon?: ReactNode;
  displayName: string;
  children?: ReactNode
}

const CardStatesCollapsible: React.FC<CardStatesCollapsibleProps> = ({ icon, displayName, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="lg:max-w-[366px] lg:min-w-[343px] space-y-2"
    >
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex justify-between h-[66px] bg-[#F8F8F8] hover:bg-[#F8F8F8]/70 px-[24px] text-[#0FA1DB] hover:text-[#0FA1DB] font-montserrat"
        >
          <div className="text-[14px] font-montserrat flex gap-[15px] font-medium items-center">
            {/*<LayoutGrid width={16} height={16} />*/}
            {icon}
            {displayName}
          </div>
          <div className="rounded-full bg-[#C2E2EE] w-[18px] h-[18px] flex justify-center items-center">
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            <span className="sr-only">Toggle</span>
          </div>
        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-2">
        {
          children
        }
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CardStatesCollapsible

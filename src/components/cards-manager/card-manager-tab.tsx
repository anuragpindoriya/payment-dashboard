import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button.tsx'
import { ChevronsUpDown, LayoutGrid } from 'lucide-react'

export default function CardManagerTab() {
  const [isOpen, setIsOpen] = useState(false)
  return <div className={'card-manager-tab-content w-full px-[39px] py-[34px]'}>
    <div className={'card-stats w-[30%]'}>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <div className="text-[14px] font-montserrat flex gap-[2px] font-medium items-center">
            <LayoutGrid width={'16px'} />
            Card Details
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/primitives
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
    <div className={'card-manger w-full'}></div>
  </div>
}
import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button.tsx'
import { ChevronDown, LayoutGrid, Upload } from 'lucide-react'

export default function CardManagerTab() {
  const [isOpen, setIsOpen] = useState(false)
  return <div className={'card-manager-tab-content w-full px-[39px] py-[34px]'}>
    <div className={'card-stats w-[30%]'}>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >


        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm"
                  className={'w-full flex justify-between h-[66px] bg-[#F8F8F8] hover:bg-[#F8F8F8]/70'}>
            <div className="text-[14px] font-montserrat flex gap-[2px] font-medium items-center">
              <LayoutGrid width={'16px'} />
              Card Details
            </div>
            <div>
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </div>

          </Button>
        </CollapsibleTrigger>


        <CollapsibleContent className="space-y-2">
          <div className={'border-x-1 border-[#6A94A5] flex flex-col'}>
            <div className={'h-[84px] px-[23px] pt-[19px] flex justify-between pb-[23px]'}>
              <div className={'flex gap-[16px]'}>
                <div className={'rounded-full bg-[#C2E2EE] w-[40px] h-[40px] flex justify-center items-center'}>
                  <Upload width={'16px'} className={'text-[#0FA1DB]'} />
                </div>
                <div className={'font-montserrat'}>
                  <div className={'text-[#0C3F62] text-[14px] font-medium'}>Ordered Food</div>
                  <div className={'text-[#6A94A5] text-[12px] font-medium pt-[2px]'}>20th May 2022</div>
                  <div className={'text-[#0FA1DB] text-[12px] font-medium pt-[5px]'}>Charges applied on credit card
                  </div>
                </div>
              </div>
              <div className={'text-[#D12626] text-[12px]'}>
                -$ 150.00
              </div>
            </div>
            <hr className="h-[1px] border-t-0 bg-[#0FA1DB] flex mt-[9px] w-[80%] items-center mx-auto" />
            <div className={'h-[84px] px-[23px] pt-[19px] flex justify-between pb-[23px]'}>
              <div className={'flex gap-[16px]'}>
                <div className={'rounded-full bg-[#C2E2EE] w-[40px] h-[40px] flex justify-center items-center'}>
                  <Upload width={'16px'} className={'text-[#0FA1DB]'} />
                </div>
                <div className={'font-montserrat'}>
                  <div className={'text-[#0C3F62] text-[14px] font-medium'}>Ordered Food</div>
                  <div className={'text-[#6A94A5] text-[12px] font-medium pt-[2px]'}>20th May 2022</div>
                  <div className={'text-[#0FA1DB] text-[12px] font-medium pt-[5px]'}>Charges applied on credit card
                  </div>
                </div>
              </div>
              <div className={'text-[#D12626] text-[12px]'}>
                -$ 150.00
              </div>
            </div>
            <hr className="h-[1px] border-t-0 bg-[#0FA1DB] flex mt-[9px] w-[80%] items-center mx-auto" />

          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
    <div className={'card-manger w-full'}></div>
  </div>
}
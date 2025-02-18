import { useState } from 'react'
import CardManagerTab from '@/components/cards-manager/card-manager-tab.tsx'
import AddCardDialog from '@/components/cards-manager/add-card-dialog.tsx'

export default function CardManager() {

  const tabList = ['Saved Cards', 'GD Cards']
  const [activeTab, setActiveTab] = useState(0)
  const handelActiveTab = (index: number) => {
    setActiveTab(index)
  }
  return (
    <div className={'bg-white'}>
      <div className={'w-full bg-white px-6 pt-[10px] mt-[24px] flex justify-between font-montserrat'}
           style={{ boxShadow: '0px 1px 2px 0px #6A94A5' }}>
        <div className={'flex gap-4 self-end'}>
          {
            tabList.map((res: string, index: number) =>
              <div
                className={`text-[#0fa1db] pb-4 cursor-pointer ${activeTab === index ? 'border-b-2 border-[#0fa1db]' : ''} `}
                onClick={() => handelActiveTab(index)}
                key={index}>
                {res}
              </div>)
          }
        </div>
        <div className={'mb-[10px]'}>
          {/*<Button variant={'pd-default'} className={''}><Plus className={'w-[12px]'} /> Add Card</Button>*/}
          <AddCardDialog />
        </div>
      </div>
      <CardManagerTab />

    </div>
  )
}
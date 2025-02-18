import { Archive, Check, Lock } from 'lucide-react'
import gpay from '@/assets/images/gpay.png'
import { Button } from '@/components/ui/button.tsx'
import { CardState } from '@/components/cards-manager/card-slice.ts'

const CardActions = ({ cards }: { cards: CardState }) => {
  console.log(cards)
  return (
    <div
      className="bg-[#C2E2EE] rounded-[4px] px-[30px] py-[24px] mt-[32px] w-[200px] text-[#0C3F62] text-[10px] grid grid-cols-2 gap-x-[10px] gap-y-[10px] font-medium">
      {[
        { icon: <Lock width="14px" />, label: 'Lock Card' },
        { icon: <Archive width="14px" />, label: 'Archive' },
        { icon: <Check width="14px" />, label: 'Set As Default' },
        { icon: <img src={gpay} alt="gpay" className="h-full w-full" />, label: 'Add to GPay' },
      ].map((action, index) => (
        <div key={index} className="flex flex-col justify-start items-center gap-[5px]">
          <Button className="w-[34px] h-[34px] rounded-full bg-[#0FA1DB] p-0">{action.icon}</Button>
          <div className="text-center">{action.label}</div>
        </div>
      ))}
    </div>
  )
}
export default CardActions
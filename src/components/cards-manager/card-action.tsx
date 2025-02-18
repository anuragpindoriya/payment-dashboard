import { Archive, Check, Lock } from 'lucide-react'
import gpay from '@/assets/images/gpay.png'
import { Button } from '@/components/ui/button.tsx'
import { cardAction, CardState } from '@/components/cards-manager/card-slice.ts'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

const CardActions = ({ card }: { card: CardState }) => {
  const dispatch = useDispatch()

  const actionHandler = (card: CardState, actionType: keyof Pick<CardState, 'isCardLocked' | 'isCardArchived' | 'isCardDefault' | 'isAddToGPay'>) => {
    console.log(`Action: ${actionType}`, card)
    toast('Action performed successfully')
    dispatch(cardAction({ id: card.id, property: actionType }))
  }

  const actions = [
    {
      icon: <Lock width="14px" />,
      label: 'Lock Card',
      isActive: card?.isCardLocked,
      onClick: () => actionHandler(card, 'isCardLocked'),
    },
    {
      icon: <Archive width="14px" />,
      label: 'Archive',
      isActive: card?.isCardArchived,
      onClick: () => actionHandler(card, 'isCardArchived'),
    },
    {
      icon: <Check width="14px" />,
      label: 'Set As Default',
      isActive: card?.isCardDefault,
      onClick: () => actionHandler(card, 'isCardDefault'),
    },
    {
      icon: <img src={gpay} alt="gpay" className="h-full w-full" />,
      label: 'Add to GPay',
      isActive: card?.isAddToGPay,
      onClick: () => actionHandler(card, 'isAddToGPay'),
    },
  ]

  return (
    <div
      className="bg-[#C2E2EE] rounded-[4px] px-[30px] py-[24px] mt-[32px] w-[200px] text-[#0C3F62] text-[10px] grid grid-cols-2 gap-x-[10px] gap-y-[10px] font-medium">
      {actions.map((action, index) => (
        <div key={index} className="flex flex-col justify-start items-center gap-[5px]">
          <Button
            onClick={action.onClick}
            className={`w-[34px] h-[34px] rounded-full p-0 transition ${
              action.isActive ? 'bg-[#0C3F62]' : 'bg-[#0FA1DB] hover:bg-[#0C3F62]'
            }`}>
            {action.icon}
          </Button>
          <div className="text-center">{action.label}</div>
        </div>
      ))}
    </div>
  )
}

export default CardActions
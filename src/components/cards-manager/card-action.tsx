import { Archive, Check, Lock } from 'lucide-react'
import gpay from '@/assets/images/gpay.png'
import { Button } from '@/components/ui/button.tsx'
import { cardAction, CardState } from '@/components/cards-manager/card-slice.ts'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

type ActionType = 'isCardLocked' | 'isCardArchived' | 'isCardDefault' | 'isAddToGPay'

const messageList: Record<ActionType, { true: string, false: string }> = {
  isCardLocked: { false: 'Card Locked', true: 'Card Unlocked' },
  isCardArchived: { false: 'Card Archived', true: 'Card Unarchived' },
  isCardDefault: { false: 'Card Set As Default', true: 'Card Not Set As Default' },
  isAddToGPay: { false: 'Card Added to GPay', true: 'Card Removed from GPay' },
}

const CardActions = ({ card }: { card: CardState }) => {
  const dispatch = useDispatch()

  const actionHandler = (card: CardState, actionType: ActionType) => {
    const currentState = card[actionType]
    toast(messageList[actionType][String(currentState) as 'true' | 'false'])
    dispatch(cardAction({ id: card.id, property: actionType }))
  }

  const actions = [
    {
      id: 'lock_Card',
      icon: <Lock width="14px" />,
      label: 'Lock Card',
      isActive: card?.isCardLocked,
      onClick: () => actionHandler(card, 'isCardLocked'),
    },
    {
      id: 'archive_Card',
      icon: <Archive width="14px" />,
      label: 'Archive',
      isActive: card?.isCardArchived,
      onClick: () => actionHandler(card, 'isCardArchived'),
    },
    {
      id: 'default_Card',
      icon: <Check width="14px" />,
      label: 'Set As Default',
      isActive: card?.isCardDefault,
      onClick: () => actionHandler(card, 'isCardDefault'),
    },
    {
      id: 'add_to_gpay',
      icon: <img src={gpay} alt="gpay" className="h-full w-full" />,
      label: 'Add to GPay',
      isActive: card?.isAddToGPay,
      onClick: () => actionHandler(card, 'isAddToGPay'),
    },
  ]

  return (
    <div
      className="bg-[#C2E2EE] rounded-[4px] px-[10px] py-[10px] sm:px-[8px] sm:py-[20px] md:px-[30px] md:py-[24px] sm:mb-[15px] sm:mt-[32px] sm:w-[200px] text-[#0C3F62] text-[10px] grid grid-cols-4 sm:grid-cols-2 gap-x-[10px] gap-y-[10px] font-medium">
      {actions.map((action, index) => (
        <div key={index} className="flex flex-col justify-start items-center gap-[5px]">
          <Button
            onClick={action.onClick}
            className={`w-[34px] h-[34px] rounded-full p-0 transition ${
              action.isActive ? 'bg-[#0C3F62]' : 'bg-[#0FA1DB] hover:bg-[#0C3F62]'
            }`}>
            {action.icon}
            {
              action.id === 'add_to_gpay' && action.isActive &&
              <div
                className={'w-[34px] h-[34px] rounded-full z-[2] absolute bg-[#0C3F6250] flex justify-center items-center'}>
                <Check width="14px" />
              </div>
            }
          </Button>
          <div className="text-center">{action.label}</div>
        </div>
      ))}
    </div>
  )
}

export default CardActions

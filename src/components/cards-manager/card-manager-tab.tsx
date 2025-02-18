import { useMemo } from 'react'
import { LayoutGrid, Settings2 } from 'lucide-react'
import { RootState } from '@/store.ts'
import { useSelector } from 'react-redux'
import { CardState } from '@/components/cards-manager/card-slice.ts'
import CardStatesCollapsible from '@/components/cards-manager/card-states-collapsible.tsx'
import CardTransactionsCollapsible from '@/components/cards-manager/card-transactions-collapsible.tsx'
import CardDetailsCollapsible from '@/components/cards-manager/card-details-collapsible.tsx'
import CardSection from '@/components/cards-manager/card-section.tsx'

export default function CardManagerTab() {

  const cardData = useSelector((state: RootState) => state.card.cardsDetails)
  const creditCardDetails = useMemo(() => cardData.filter((res: CardState) => res.cardType === 'credit'), [cardData])
  const debitCardDetails = useMemo(() => cardData.filter((res: CardState) => res.cardType === 'debit'), [cardData])


  return <div className={'card-manager-tab-content w-full px-[39px] py-[34px] font-montserrat flex gap-[38px]'}>
    <div className={'card-stats w-[35%] flex flex-col gap-[23px]'}>

      <CardStatesCollapsible
        icon={<LayoutGrid width={'16px'} height={'16px'} />}
        displayName={'Card Details'}>
        <CardDetailsCollapsible />
      </CardStatesCollapsible>

      <CardStatesCollapsible
        icon={<Settings2 width={'16px'} height={'16px'} />}
        displayName={'Today’s Transactions'}>
        <CardTransactionsCollapsible />
      </CardStatesCollapsible>

    </div>
    <div className={'w-full'}>
      <CardSection title={'Credit Cards'} cards={creditCardDetails} />
      <CardSection title={'Debit Cards'} cards={debitCardDetails} />
    </div>

  </div>
}
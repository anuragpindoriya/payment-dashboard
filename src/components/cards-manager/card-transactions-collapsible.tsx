import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'
import TransactionItem from '@/components/cards-manager/card-transaction-Item.tsx'

export default function CardTransactionsCollapsible() {
  const cardTransactions = useSelector((state: RootState) => state.card.transactions)

  return <>
    <div className="border-x border-b border-[#6A94A5] flex flex-col pb-[25px]">
      {cardTransactions?.map((transaction, index) => (
        <div key={transaction.id}>
          <TransactionItem transaction={transaction} />
          {index !== cardTransactions.length - 1 && (
            <hr className="h-[1px] border-t-0 bg-[#0FA1DB] flex mt-[9px] w-[80%] items-center mx-auto" />
          )}
        </div>
      ))}
    </div>
  </>
}
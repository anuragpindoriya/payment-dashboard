import { Download, Upload } from 'lucide-react'
import { TransactionsState } from '@/components/cards-manager/card-slice.ts'
import clsx from 'clsx'

interface TransactionItemProps {
  transaction: TransactionsState
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const isAmountCredited = transaction.transactionsType === 'credit'

  return (
    <div className="h-[95px] sm:h-[84px] pl-[23px] pt-[19px] flex justify-start gap-[2px] pb-[23px]"
         key={transaction.id}>
      <div className="flex gap-[16px]">
        <div className="rounded-full bg-[#C2E2EE] w-[40px] h-[40px] flex justify-center items-center">
          {isAmountCredited ? (
            <Upload width={16} className="text-[#0FA1DB]" />
          ) : (
            <Download width={16} className="text-[#0FA1DB]" />
          )}
        </div>
        <div className="font-montserrat">
          <div className="text-[#0C3F62] text-[14px] font-medium">{transaction.description || 'Transaction'}</div>
          <div className="text-[#6A94A5] text-[12px] font-medium pt-[2px]">{transaction.date}</div>
          <div className="text-[#0FA1DB] text-[12px] font-medium pt-[5px]">{transaction.additionalInfo}</div>
        </div>
      </div>
      <div className={clsx('text-[12px]', isAmountCredited ? 'text-[#6ADB24]' : 'text-[#D12626]')}>
        {isAmountCredited ? `+ ${transaction.amount}` : `- ${transaction.amount}`}
      </div>
    </div>
  )
}

export default TransactionItem

// export default function CardTransactionsCollapsible() {
//   const cardTransactions = useSelector((state: RootState) => state.card.transactions)
//
//   return (
//     <div className="border-x border-b border-[#6A94A5] flex flex-col pb-[25px]">
//       {cardTransactions?.map((transaction, index) => (
//         <div key={transaction.id}>
//           <TransactionItem transaction={transaction} />
//           {index !== cardTransactions.length - 1 && (
//             <hr className="h-[1px] border-t-0 bg-[#0FA1DB] flex mt-[9px] w-[80%] items-center mx-auto" />
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

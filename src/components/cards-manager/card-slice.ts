import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import master_card from '@/assets/images/master_card.png'
import hdfc_bank from '@/assets/images/hdfc_bank.png'

export interface CardState {
  id: number;
  cardOwner: string;
  cardNumber: string;
  validOn: string;
  cardProvider: string;
  cvv: string;
  cardProviderBank: string;
  cardProviderBankLogo: string;
  cardProviderLogo: string;
  isCardLocked: boolean;
  isCardArchived: boolean;
  isCardDefault: boolean;
  isAddToGPay: boolean;
  cardType: string;
}

export interface TransactionsState {
  transactionsType: string
  date: string
  additionalInfo: string
  amount: string,
  cardNumber: string
  id: number
}

export interface CardsSliceState {
  cards: CardState[];
  transactions: TransactionsState[];
}


const initialState: CardsSliceState = {
  cards: [
    {
      id: 1,
      cardOwner: 'John Doe',
      cardNumber: '**** **** **** 1234',
      validOn: '12/23',
      cardProvider: 'Visa',
      cvv: '123',
      cardProviderBank: 'Bank of America',
      cardProviderBankLogo: hdfc_bank,
      cardProviderLogo: master_card,
      isCardLocked: false,
      isCardArchived: false,
      isCardDefault: false,
      isAddToGPay: false,
      cardType: 'credit',
    },
    {
      id: 2,
      cardOwner: 'John Doe',
      cardNumber: '**** **** **** 1234',
      validOn: '12/23',
      cardProvider: 'Visa',
      cvv: '123',
      cardProviderBank: 'Bank of America',
      cardProviderBankLogo: hdfc_bank,
      cardProviderLogo: master_card,
      isCardLocked: false,
      isCardArchived: false,
      isCardDefault: false,
      isAddToGPay: false,
      cardType: 'credit',
    },
    {
      id: 1,
      cardOwner: 'John Doe',
      cardNumber: '**** **** **** 1234',
      validOn: '12/23',
      cardProvider: 'Visa',
      cvv: '123',
      cardProviderBank: 'Bank of America',
      cardProviderBankLogo: hdfc_bank,
      cardProviderLogo: master_card,
      isCardLocked: false,
      isCardArchived: false,
      isCardDefault: false,
      isAddToGPay: false,
      cardType: 'debit',
    },
  ],
  transactions: [{
    transactionsType: 'credit',
    date: '20th May 2022',
    additionalInfo: 'Charges applied on credit card',
    amount: '$ 150.50',
    cardNumber: '',
    id: 1,
  }],

}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardState>) => {
      const newId = state.cards.length + 1
      state.cards.push({ ...action.payload, id: newId })
    },
  },
})

export const { addCard } = cardSlice.actions

export default cardSlice.reducer

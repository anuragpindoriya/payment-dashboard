import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import master_card from '@/assets/images/master_card.png'
import hdfc_bank from '@/assets/images/hdfc_bank.png'

export interface CardState {
  id: number;
  cardOwner: string;
  cardNumber: string;
  expiryDate: string;
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
  description: string
}

export interface CardsSliceState {
  cardsDetails: CardState[];
  transactions: TransactionsState[];
}

const initialState: CardsSliceState = {
  cardsDetails: [
    {
      id: 1,
      cardOwner: 'John Doe',
      cardNumber: '**** **** **** 1234',
      expiryDate: '12/23',
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
      expiryDate: '12/23',
      cardProvider: 'Visa',
      cvv: '123',
      cardProviderBank: 'Bank of America',
      cardProviderBankLogo: hdfc_bank,
      cardProviderLogo: master_card,
      isCardLocked: true,
      isCardArchived: false,
      isCardDefault: false,
      isAddToGPay: false,
      cardType: 'credit',
    },
    {
      id: 3,
      cardOwner: 'John Doe',
      cardNumber: '**** **** **** 1234',
      expiryDate: '12/23',
      cardProvider: 'Visa',
      cvv: '123',
      cardProviderBank: 'Bank of America',
      cardProviderBankLogo: hdfc_bank,
      cardProviderLogo: master_card,
      isCardLocked: true,
      isCardArchived: false,
      isCardDefault: false,
      isAddToGPay: false,
      cardType: 'debit',
    },
  ],
  transactions: [
    {
      transactionsType: 'credit',
      description: 'Ordered Food',
      date: '20th May 2022',
      additionalInfo: 'Charges applied on credit card',
      amount: '$ 150.50',
      cardNumber: '',
      id: 1,
    },
    {
      transactionsType: 'debit',
      date: '20th May 2022',
      additionalInfo: 'Charges applied on credit card',
      amount: '$ 50.50',
      cardNumber: '',
      id: 2,
      description: 'Ticket Refund',
    },
  ],
}

interface CardActionPayload {
  id: number;
  property: keyof Pick<CardState, 'isCardLocked' | 'isCardArchived' | 'isCardDefault' | 'isAddToGPay'>;
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardState>) => {
      const newId = state.cardsDetails.length + 1
      state.cardsDetails.push({
        ...action.payload, id: newId,
        isCardLocked: false,
        isCardArchived: false,
      })
    },
    cardAction: (state, action: PayloadAction<CardActionPayload>) => {
      const card = state.cardsDetails.find((c) => c.id === action.payload.id)
      if (card) {
        if (action.payload.property === 'isCardLocked' && !card[action.payload.property]) {
          card[action.payload.property] = !card[action.payload.property]
          card.isCardArchived = false
          card.isCardDefault = false
        } else if (action.payload.property === 'isCardArchived' && !card[action.payload.property]) {
          card[action.payload.property] = !card[action.payload.property]
          card.isCardLocked = false
          card.isCardDefault = false
        } else if (action.payload.property === 'isCardDefault' && !card[action.payload.property]) {
          card[action.payload.property] = !card[action.payload.property]
          card.isCardLocked = false
          card.isCardArchived = false
        } else {
          card[action.payload.property] = !card[action.payload.property]
        }

      }
    },
  },
})

export const { addCard, cardAction } = cardSlice.actions

export default cardSlice.reducer
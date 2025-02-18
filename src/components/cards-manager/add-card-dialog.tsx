import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addCard } from '@/components/cards-manager/card-slice.ts'
import master_card from '@/assets/images/master_card.png'
import hdfc_bank from '@/assets/images/hdfc_bank.png'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'

const isValidCardNumber = (cardNumber: string) => {
  let sum = 0, alternate = false
  cardNumber = cardNumber.replace(/\D/g, '')
  if (cardNumber.length !== 16) return false
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let n = parseInt(cardNumber[i])
    if (alternate) {
      n *= 2
      if (n > 9) n -= 9
    }
    sum += n
    alternate = !alternate
  }
  return sum % 10 === 0
}
// 3987010348330002
const formSchema = z.object({
  cardOwner: z.string().min(2, { message: 'Required' }).max(35, { message: 'Max 35 characters allowed' }),
  cardProviderBank: z.string().min(2, { message: 'Required' }),
  cardType: z.enum(['credit', 'debit'], { message: 'Select a Card Type' }),
  cardNumber: z.string().refine(isValidCardNumber, { message: 'Invalid Card Number' }),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Invalid format (MM/YY)' })
    .refine((date) => {
      const [month, year] = date.split('/').map(Number)
      const currentYear = new Date().getFullYear() % 100
      const currentMonth = new Date().getMonth() + 1

      if (year < currentYear) return false // Year must be in the future
      if (year === currentYear && month < currentMonth) return false // If same year, month must be in the future

      return true
    }, { message: 'Expiry date must be in the future' }),
  cvv: z.string().length(3, { message: 'CVV must be 3 digits' }),
  isCardDefault: z.boolean().optional(),
  isAddToGPay: z.boolean().optional(),
})

export default function AddCardDialog() {
  const [modelOpen, setModelOpen] = useState(false)
  const dispatch = useDispatch()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: useMemo(() => ({
      cardOwner: '',
      cardProviderBank: 'HDFC Bank',
      cardType: undefined,
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      isCardDefault: false,
      isAddToGPay: false,
    }), []),
  })
  const closeModel = () => {
    setModelOpen(false)
    form.reset({
      cardOwner: '',
      cardProviderBank: 'HDFC Bank',
      cardType: undefined,
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      isCardDefault: false,
      isAddToGPay: false,
    })
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    closeModel()
    dispatch(addCard({
      ...values,
      id: Date.now(),
      // cardProvider: 'Visa',
      cardProviderBankLogo: hdfc_bank,
      cardProviderLogo: master_card,
      isCardLocked: false,
      isCardArchived: false,
    }))
  }

  const [expiry, setExpiry] = useState('')

  useEffect(() => {
      if (modelOpen) {
        form.setValue('cardProviderBank', 'HDFC Bank', { shouldValidate: true })
      }
      form.reset()
      setExpiry('')
    }
    , [form, modelOpen])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/\D/g, '') // Remove non-numeric characters

    if (value.length > 4) value = value.slice(0, 4) // Limit to MMYY format

    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}` // Insert "/"
    }

    setExpiry(value)

    form.setValue('expiryDate', value, { shouldValidate: true })
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && expiry.length === 3) {
      setExpiry(expiry.slice(0, 2)) // Remove "/" when deleting YY
      e.preventDefault()
    }
  }

  return (
    <Dialog open={modelOpen} onOpenChange={setModelOpen}>
      <DialogTrigger asChild>
        <Button variant={'pd-default'} className={'font-montserrat'} onClick={() => setModelOpen(true)}>
          <Plus className={'w-[12px]'} /> Add Card
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] p-0 rounded-[3px]" disableModelCloseButton>
        <DialogHeader className={'px-[15px] py-[12px] shadow-[0_2px_5px_rgba(0,_0,_0,_0.36)]'}>
          <DialogTitle className="text-lg font-medium flex justify-between font-montserrat">
            <div>New Card</div>
            <Button variant={'ghost'} onClick={closeModel}><X height={'10px'} width={'12px'} /></Button>
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className={'space-y-4 px-[30px] font-montserrat'}>
              <FormField
                control={form.control}
                name="cardOwner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="i.e. James Carlon" {...field} className={'rounded-[3px]'} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cardProviderBank"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="i.e. HDFC BANK" {...field} value="HDFC Bank" readOnly
                             className={'rounded-[3px]'} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cardType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Type:</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className={'rounded-[3px]'}>
                          <SelectValue placeholder="Select Card Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="credit">Credit Card</SelectItem>
                        <SelectItem value="debit">Debit Card</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Number:</FormLabel>
                    <FormControl>
                      <Input placeholder="i.e. 7754 1542 6584 4875" maxLength={19} {...field}
                             className={'rounded-[3px]'} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4 items-start">
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Valid Till:</FormLabel>
                      <FormControl>
                        <Input placeholder="MM/YY" maxLength={5} {...field}
                               onChange={handleChange}
                               onKeyDown={handleKeyDown}
                               value={expiry}
                               className={'rounded-[3px]'}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CVV:</FormLabel>
                      <FormControl>
                        <Input type={'password'} placeholder="_ _ _" maxLength={3} {...field}
                               className={'rounded-[3px]'} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="isCardDefault"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start">
                    <FormControl>
                      <Checkbox onCheckedChange={field.onChange} checked={field.value} />
                    </FormControl>
                    <FormLabel className={'text-[12px]'}>Set this card as Default</FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isAddToGPay"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start">
                    <FormControl>
                      <Checkbox onCheckedChange={field.onChange} checked={field.value} />
                    </FormControl>
                    <FormLabel className={'text-[12px]'}>Add this card to GPay?</FormLabel>
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className={'border-t-[1px] border-[#6A94A5A6] pt-[14px] pb-[16px] px-[29px]'}>
              <Button type="button" variant="outline" onClick={closeModel} className={'rounded-[3px] bg-[#C2E2EE66]'}>
                Cancel
              </Button>
              <Button type="submit" className={'rounded-[3px] bg-[#0C3F62]'}>Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
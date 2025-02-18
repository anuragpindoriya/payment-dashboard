import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { ChangeEvent, KeyboardEvent, useState } from 'react'

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

const formSchema = z.object({
  name: z.string().min(2, { message: 'Required' }).max(35, { message: 'Max 35 characters allowed' }),
  bankName: z.string().min(2, { message: 'Required' }),
  cardType: z.enum(['credit', 'debit'], { message: 'Select a Card Type' }),
  cardNumber: z.string().refine(isValidCardNumber, { message: 'Invalid Card Number' }),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Invalid format (MM/YY)' }).refine(
    (date) => {
      const [month, year] = date.split('/').map(Number)
      const currentYear = new Date().getFullYear() % 100
      const currentMonth = new Date().getMonth() + 1
      return year > currentYear || (year === currentYear && month >= currentMonth)
    },
    { message: 'Date must be in the future' },
  ),
  cvv: z.string().length(3, { message: 'CVV must be 3 digits' }),
  setDefault: z.boolean().optional(),
  addToGPay: z.boolean().optional(),
})

export default function AddCardDialog() {
  const [modelOpen, setModelOpen] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      bankName: '',
      cardType: undefined,
      cardNumber: '',
      expiry: '',
      cvv: '',
      setDefault: false,
      addToGPay: false,
    },
  })
  const closeModel = () => {
    setModelOpen(false)
    form.reset()
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    closeModel()

  }

  const [expiry, setExpiry] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/\D/g, '') // Remove non-numeric characters

    if (value.length > 4) value = value.slice(0, 4) // Limit to MMYY format

    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}` // Insert "/"
    }

    setExpiry(value)
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
        <Button variant={'pd-default'} className={''} onClick={() => setModelOpen(true)}>
          <Plus className={'w-[12px]'} /> Add Card
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]" disableModelCloseButton>
        <DialogHeader>
          <DialogTitle className="text-lg font-medium">New Card</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="i.e. James Carlon" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Name:</FormLabel>
                  <FormControl>
                    <Input placeholder="i.e. HDFC BANK" {...field} value={'HDFC Bank'} disabled />
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
                      <SelectTrigger>
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
                    <Input placeholder="i.e. 7754 1542 6584 4875" maxLength={19} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4 items-start">
              <FormField
                control={form.control}
                name="expiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valid Till:</FormLabel>
                    <FormControl>
                      <Input placeholder="MM/YY" maxLength={5} {...field}
                             onChange={handleChange}
                             onKeyDown={handleKeyDown}
                             value={expiry}
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
                      <Input type={'password'} placeholder="_ _ _" maxLength={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="setDefault"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2">
                  <FormControl>
                    <Checkbox onCheckedChange={field.onChange} checked={field.value} />
                  </FormControl>
                  <FormLabel>Set this card as Default</FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="addToGPay"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2">
                  <FormControl>
                    <Checkbox onCheckedChange={field.onChange} checked={field.value} />
                  </FormControl>
                  <FormLabel>Add this card to GPay?</FormLabel>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeModel}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

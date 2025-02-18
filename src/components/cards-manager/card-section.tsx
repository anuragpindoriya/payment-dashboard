import { CardState } from '@/components/cards-manager/card-slice.ts'
import { Button } from '../ui/button'
import { Eye } from 'lucide-react'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel.tsx'
import gpay_card from '@/assets/images/gpay_card.png'
import CardActions from '@/components/cards-manager/card-action.tsx'
import { useEffect, useState } from 'react'


const CardSection = ({ title, cards }: { title: string; cards: CardState[] }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCardNumber, setShowCardNumber] = useState(false)

  useEffect(() => {
    if (!api) {
      return
    }

    // setCount(api.scrollSnapList().length)
    setCurrentIndex(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrentIndex(api.selectedScrollSnap())
    })
  }, [api])

  const renderCardNumber = (cardNumber: string) => {
    if (showCardNumber) {
      const chunks = [
        cardNumber.slice(0, 4),
        cardNumber.slice(4, 8),
        cardNumber.slice(8, 12),
        cardNumber.slice(12, 16),
      ]
      return <>{chunks.map((chunk, index) => (
        <span key={index} className="tracking-[3px] text-[16px]">{chunk}</span> // Add space between chunks
      ))}</>
    }

    return (
      <span className="flex items-center gap-[10px]">
      {[0, 4, 8].map((startIndex) => (
        <span key={startIndex} className="flex gap-[4px]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-full w-[6px] h-[6px]" />
          ))}
        </span>
      ))}
        <span className={'tracking-[3px]'}>{cardNumber.slice(-4)}</span>
    </span>
    )
  }
  return <div className="w-full">
    <div className="h-[66px] w-full flex items-end">
      <div className="h-[33px] border-b-2 border-[#0fa1db] text-[20px] text-[#0FA1DB] font-semibold">
        {title}
      </div>
    </div>
    <div className="flex gap-[41px] pt-[15px]">
      <div className="w-[340px] flex flex-col gap-[8px]">
        <div className="flex justify-end">
          <Button className="text-[12px] text-[#0C3F62] bg-[#0FA1DB30] hover:bg-[#0FA1DB30] px-[6px] py-[3px] h-fit"
                  onClick={() => setShowCardNumber(!showCardNumber)}>
            <Eye width={'12px'} height={'12px'} className="inline-block" />
            <span className="ml-[5px] inline-block">{showCardNumber ? 'Hide Card Number' : 'Show Card Number'}</span>
          </Button>
        </div>
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <div
                  className="w-[340px] h-[180px] rounded-[4px] bg-[#0C3F62] text-white px-[16px] pt-[20px] pb-[27px] flex flex-col gap-[8px]">
                  <div className="flex justify-between">
                    <img src={gpay_card} alt="bank_logo" className="h-[16px]" />
                    <img src={card?.cardProviderBankLogo} alt="bank_logo" className="h-[16px]" />
                  </div>
                  <div className="mt-[27px]">
                    <div className="text-[20px] font-medium">{card?.cardOwner}</div>
                    <div
                      className="text-[16px] font-normal font-inria-sans flex items-center gap-[4px]">{renderCardNumber(card?.cardNumber)}</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-[12px] font-bold">Valid Till: {card.expiryDate}</div>
                    <div
                      className="text-[12px] font-bold flex items-center gap-[4px]">CVV: {[...Array(3)].map((_, i) => (
                      <div key={i} className="bg-white rounded-full w-[6px] h-[6px]" />
                    ))}</div>
                    <img src={card?.cardProviderLogo} alt="master_card" className="h-[39px]" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <CardActions card={cards[currentIndex]} />
    </div>
  </div>
}

export default CardSection
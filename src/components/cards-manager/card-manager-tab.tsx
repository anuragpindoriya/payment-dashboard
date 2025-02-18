import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button.tsx'
import { Archive, Check, ChevronDown, Eye, LayoutGrid, Lock, Settings2, Upload } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel.tsx'
import master_card from '@/assets/images/master_card.png'
import hdfc_bank from '@/assets/images/hdfc_bank.png'
import gpay from '@/assets/images/gpay.png'
import gpay_card from '@/assets/images/gpay_card.png'

export default function CardManagerTab() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTransetionCollapseOpen, setIsTransetionCollapseOpen] = useState(false)

  // const cardDetails = [
  //
  //   {
  //     id: 1,
  //     cardOwner: 'John Doe',
  //     cardNumber: '**** **** **** 1234',
  //     validOn: '12/23',
  //     cardProvider: 'Visa',
  //     cvv: '123',
  //     cardProviderBank: 'Bank of America',
  //     cardProviderBankLogo: hdfc_bank,
  //     cardProviderLogo: master_card,
  //     isCardLocked: false,
  //     isCardArchived: false,
  //     isCardDefault: false,
  //     isAddToGPay: false,
  //     cardType: 'credit',
  //   },
  //
  //
  //   {
  //     id: 2,
  //     cardOwner: 'John Doe',
  //     cardNumber: '**** **** **** 1234',
  //     validOn: '12/23',
  //     cardProvider: 'Visa',
  //     cvv: '123',
  //     cardProviderBank: 'Bank of America',
  //     cardProviderBankLogo: hdfc_bank,
  //     cardProviderLogo: master_card,
  //     isCardLocked: false,
  //     isCardArchived: false,
  //     isCardDefault: false,
  //     isAddToGPay: false,
  //     cardType: 'debit',
  //   },
  // ]
  return <div className={'card-manager-tab-content w-full px-[39px] py-[34px] font-montserrat flex gap-[38px]'}>
    <div className={'card-stats w-[35%] flex flex-col gap-[23px]'}>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="max-w-[366px] min-w-[343px] space-y-2"
      >


        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm"
                  className={'w-full flex justify-between h-[66px] bg-[#F8F8F8] hover:bg-[#F8F8F8]/70 px-[24px] text-[#0FA1DB] hover:text-[#0FA1DB] font-montserrat'}>
            <div className="text-[14px] font-montserrat flex gap-[15px] font-medium items-center">
              <LayoutGrid width={'16px'} height={'16px'} />
              Card Details
            </div>
            <div className={'rounded-full bg-[#C2E2EE] w-[18px] h-[18px] flex justify-center items-center'}>
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </div>

          </Button>
        </CollapsibleTrigger>


        <CollapsibleContent className="space-y-2">
          <div className={'border-x-1 border-[#6A94A5] border-b-1 flex flex-col'}>
            <div className={'h-[84px] px-[23px] pt-[19px] flex justify-between pb-[23px]'}>
              <div className={'flex gap-[16px]'}>
                <div className={'rounded-full bg-[#C2E2EE] w-[40px] h-[40px] flex justify-center items-center'}>
                  <Upload width={'16px'} className={'text-[#0FA1DB]'} />
                </div>
                <div className={'font-montserrat'}>
                  <div className={'text-[#0C3F62] text-[14px] font-medium'}>Ordered Food</div>
                  <div className={'text-[#6A94A5] text-[12px] font-medium pt-[2px]'}>20th May 2022</div>
                  <div className={'text-[#0FA1DB] text-[12px] font-medium pt-[5px]'}>Charges applied on credit card
                  </div>
                </div>
              </div>
              <div className={'text-[#D12626] text-[12px]'}>
                -$ 150.00
              </div>
            </div>
            <hr className="h-[1px] border-t-0 bg-[#0FA1DB] flex mt-[9px] w-[80%] items-center mx-auto" />
            <div className={'h-[84px] px-[23px] pt-[19px] flex justify-between pb-[23px]'}>
              <div className={'flex gap-[16px]'}>
                <div className={'rounded-full bg-[#C2E2EE] w-[40px] h-[40px] flex justify-center items-center'}>
                  <Upload width={'16px'} className={'text-[#0FA1DB]'} />
                </div>
                <div className={'font-montserrat'}>
                  <div className={'text-[#0C3F62] text-[14px] font-medium'}>Ordered Food</div>
                  <div className={'text-[#6A94A5] text-[12px] font-medium pt-[2px]'}>20th May 2022</div>
                  <div className={'text-[#0FA1DB] text-[12px] font-medium pt-[5px]'}>Charges applied on credit card
                  </div>
                </div>
              </div>
              <div className={'text-[#D12626] text-[12px]'}>
                -$ 150.00
              </div>
            </div>
            <hr className="h-[1px] border-t-0 bg-[#0FA1DB] flex mt-[9px] w-[80%] items-center mx-auto" />

          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={isTransetionCollapseOpen}
        onOpenChange={setIsTransetionCollapseOpen}
        className="max-w-[366px] min-w-[343px] space-y-2"
      >


        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm"
                  className={'w-full flex justify-between h-[66px] bg-[#F8F8F8] hover:bg-[#F8F8F8]/70 px-[24px] text-[#0FA1DB] hover:text-[#0FA1DB] font-montserrat'}>
            <div className="text-[14px] font-montserrat flex gap-[15px] font-medium items-center">
              <Settings2 width={'16px'} height={'16px'} />
              Today’s Transactions
            </div>
            <div className={'rounded-full bg-[#C2E2EE] w-[18px] h-[18px] flex justify-center items-center'}>
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </div>

          </Button>
        </CollapsibleTrigger>


        <CollapsibleContent className="space-y-2">
          <div className={'border-x-1 border-[#6A94A5] border-b-1 flex flex-col'}>
            <div className={'h-[84px] px-[23px] pt-[19px] flex justify-between pb-[23px]'}>
              <div className={'flex gap-[16px]'}>
                <div className={'rounded-full bg-[#C2E2EE] w-[40px] h-[40px] flex justify-center items-center'}>
                  <Upload width={'16px'} className={'text-[#0FA1DB]'} />
                </div>
                <div className={'font-montserrat'}>
                  <div className={'text-[#0C3F62] text-[14px] font-medium'}>Ordered Food</div>
                  <div className={'text-[#6A94A5] text-[12px] font-medium pt-[2px]'}>20th May 2022</div>
                  <div className={'text-[#0FA1DB] text-[12px] font-medium pt-[5px]'}>Charges applied on credit card
                  </div>
                </div>
              </div>
              <div className={'text-[#D12626] text-[12px]'}>
                -$ 150.00
              </div>
            </div>
            <hr className="h-[1px] border-t-0 bg-[#0FA1DB] flex mt-[9px] w-[80%] items-center mx-auto" />
            <div className={'h-[84px] px-[23px] pt-[19px] flex justify-between pb-[23px]'}>
              <div className={'flex gap-[16px]'}>
                <div className={'rounded-full bg-[#C2E2EE] w-[40px] h-[40px] flex justify-center items-center'}>
                  <Upload width={'16px'} className={'text-[#0FA1DB]'} />
                </div>
                <div className={'font-montserrat'}>
                  <div className={'text-[#0C3F62] text-[14px] font-medium'}>Ordered Food</div>
                  <div className={'text-[#6A94A5] text-[12px] font-medium pt-[2px]'}>20th May 2022</div>
                  <div className={'text-[#0FA1DB] text-[12px] font-medium pt-[5px]'}>Charges applied on credit card
                  </div>
                </div>
              </div>
              <div className={'text-[#D12626] text-[12px]'}>
                -$ 150.00
              </div>
            </div>
            <hr className="h-[1px] border-t-0 bg-[#0FA1DB] flex mt-[9px] w-[80%] items-center mx-auto" />

          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
    <div className={'w-full'}>
      <div className={'card-manger w-full'}>
        <div className={'h-[66px] w-full flex items-end'}>
          <div className={'h-[33px] border-b-2 border-[#0fa1db] text-[20px] text-[#0FA1DB] font-semibold'}>
            Credit Cards
          </div>
        </div>
        <div className={'flex gap-[41px] pt-[15px]'}>
          <div className={'w-[340px] flex flex-col gap-[8px]'}>
            <div className={'flex justify-end'}>
              <Button
                className={'text-[12px] text-[#0C3F62] bg-[#0FA1DB30] hover:bg-[#0FA1DB30] px-[6px] py-[3px] whitespace-nowrap h-fit'}><Eye
                className={'align-middle inline-block'}
                width={'12px'}
                height={'12px'} />
                <span className="align-middle inline-block ml-[5px]">Show Card Number</span>
              </Button>
            </div>
            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div
                        className={'w-[340px] h-[180px]  rounded-[4px] bg-[#0C3F62] text-white px-[16px] pt-[20px] flex flex-col gap-[px] pb-[27px]'}>
                        {/*<span className="text-4xl font-semibold">{index + 1}</span>*/}
                        <div className={'flex justify-between'}>
                          <div>
                            <img src={gpay_card} alt={'bank_logo'} className={'h-[16px]'} />
                          </div>
                          <div>
                            <img src={hdfc_bank} alt={'bank_logo'} className={'h-[16px]'} />
                          </div>
                        </div>
                        <div className={'flex flex-col mt-[27px]'}>
                          <div className={'text-[20px] text-white font-medium'}>
                            John Watson
                          </div>
                          <div className={'text-[16px] font-normal font-inria-sans'}>
                            {`9 3 4 0 - 9 3 4 0 - 9 3 4 0 - 9 3 4 0`}
                          </div>
                        </div>
                        <div className={'flex justify-between'}>
                          <div className={'flex gap-[9px]'}>
                            <div className={'text-[12px] font-bold'}>
                              Valid Till :
                            </div>
                            <div className={'text-[12px] font-normal'}>
                              12/23
                            </div>
                          </div>
                          <div className={'flex gap-[9px]'}>

                            <div className={'text-[12px] font-bold'}>
                              CVV :
                            </div>
                            <div className={'text-[12px] font-normal'}>
                              0 0 0
                            </div>
                          </div>
                          <div>
                            <img src={master_card} alt={'master_card'} className={'h-[39px]'} />
                          </div>
                        </div>
                      </div>


                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/*<CarouselPrevious />*/}
                {/*<CarouselNext />*/}
              </Carousel>
            </div>
          </div>
          <div
            className={'bg-[#C2E2EE] rounded-[4px] px-[30px] py-[24px] mt-[32px] w-[200px] text-[#0C3F62] text-[10px] inline-grid grid-cols-2 justify-between gap-x-[10px] gap-y-[10px] font-medium'}>
            <div className={'flex flex-col justify-start items-center gap-[5px]'}>
              <Button className={'w-[34px] h-[34px] rounded-full bg-[#0FA1DB] p-0'}><Lock width={'14px'} /></Button>
              <div className={'text-center'}>
                Lock Card
              </div>
            </div>
            <div className={'flex flex-col justify-start items-center gap-[5px]'}>
              <Button className={'w-[34px] h-[34px] rounded-full bg-[#0FA1DB] p-0'}><Archive width={'14px'} /></Button>
              <div className={'text-center'}>
                Archive
              </div>
            </div>
            <div className={'flex flex-col justify-start items-center gap-[5px]'}>
              <Button className={'w-[34px] h-[34px] rounded-full bg-[#0FA1DB] p-0'}><Check width={'14px'} /></Button>
              <div className={'text-center'}>
                Set As
                Default
              </div>
            </div>
            <div className={'flex flex-col justify-start items-center gap-[5px]'}>
              <Button className={'w-[34px] h-[34px] rounded-full bg-[#C2E2EE] hover:bg-[#C2E2EE] p-0'}>
                <img src={gpay} alt={'gpay'} className={'h-full w-full'} />
              </Button>
              <div className={'text-center'}>
                Add to GPay
              </div>
            </div>


          </div>
        </div>

      </div>
      <div className={'card-manger w-full'}>
        <div className={'h-[66px] w-full flex items-end'}>
          <div className={'h-[33px] border-b-2 border-[#0fa1db] text-[20px] text-[#0FA1DB] font-semibold'}>
            Debit Cards
          </div>
        </div>
        <div className={'flex gap-[41px] pt-[15px]'}>
          <div className={'w-[340px] flex flex-col gap-[8px]'}>
            <div className={'flex justify-end'}>
              <Button
                className={'text-[12px] text-[#0C3F62] bg-[#0FA1DB30] hover:bg-[#0FA1DB30] px-[6px] py-[3px] whitespace-nowrap h-fit'}><Eye
                className={'align-middle inline-block'}
                width={'12px'}
                height={'12px'} />
                <span className="align-middle inline-block ml-[5px]">Show Card Number</span>
              </Button>
            </div>
            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div
                        className={'w-[340px] h-[180px]  rounded-[4px] bg-[#0C3F62] text-white px-[16px] pt-[20px] flex flex-col gap-[px] pb-[27px]'}>
                        {/*<span className="text-4xl font-semibold">{index + 1}</span>*/}
                        <div className={'flex justify-between'}>
                          <div>
                            <img src={gpay_card} alt={'bank_logo'} className={'h-[16px]'} />
                          </div>
                          <div>
                            <img src={hdfc_bank} alt={'bank_logo'} className={'h-[16px]'} />
                          </div>
                        </div>
                        <div className={'flex flex-col mt-[27px]'}>
                          <div className={'text-[20px] text-white font-medium'}>
                            John Watson
                          </div>
                          <div className={'text-[16px] font-normal font-inria-sans'}>
                            {`9 3 4 0 - 9 3 4 0 - 9 3 4 0 - 9 3 4 0`}
                          </div>
                        </div>
                        <div className={'flex justify-between'}>
                          <div className={'flex gap-[9px]'}>
                            <div className={'text-[12px] font-bold'}>
                              Valid Till :
                            </div>
                            <div className={'text-[12px] font-normal'}>
                              12/23
                            </div>
                          </div>
                          <div className={'flex gap-[9px]'}>

                            <div className={'text-[12px] font-bold'}>
                              CVV :
                            </div>
                            <div className={'text-[12px] font-normal'}>
                              0 0 0
                            </div>
                          </div>
                          <div>
                            <img src={master_card} alt={'master_card'} className={'h-[39px]'} />
                          </div>
                        </div>
                      </div>


                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/*<CarouselPrevious />*/}
                {/*<CarouselNext />*/}
              </Carousel>
            </div>
          </div>
          <div
            className={'bg-[#C2E2EE] rounded-[4px] px-[30px] py-[24px] mt-[32px] w-[200px] text-[#0C3F62] text-[10px] inline-grid grid-cols-2 justify-between gap-x-[10px] gap-y-[10px] font-medium'}>
            <div className={'flex flex-col justify-start items-center gap-[5px]'}>
              <Button className={'w-[34px] h-[34px] rounded-full bg-[#0FA1DB] p-0'}><Lock width={'14px'} /></Button>
              <div className={'text-center'}>
                Lock Card
              </div>
            </div>
            <div className={'flex flex-col justify-start items-center gap-[5px]'}>
              <Button className={'w-[34px] h-[34px] rounded-full bg-[#0FA1DB] p-0'}><Archive width={'14px'} /></Button>
              <div className={'text-center'}>
                Archive
              </div>
            </div>
            <div className={'flex flex-col justify-start items-center gap-[5px]'}>
              <Button className={'w-[34px] h-[34px] rounded-full bg-[#0FA1DB] p-0'}><Check width={'14px'} /></Button>
              <div className={'text-center'}>
                Set As
                Default
              </div>
            </div>
            <div className={'flex flex-col justify-start items-center gap-[5px]'}>
              <Button className={'w-[34px] h-[34px] rounded-full bg-[#C2E2EE] hover:bg-[#C2E2EE] p-0'}>
                <img src={gpay} alt={'gpay'} className={'h-full w-full'} />
              </Button>
              <div className={'text-center'}>
                Add to GPay
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>

  </div>
}
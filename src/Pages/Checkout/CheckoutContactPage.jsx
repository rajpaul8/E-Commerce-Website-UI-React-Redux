import CartPaymentSection from "../../components/cart/CartPaymentSection"
import { useEffect, useState } from "react"
import CartContactInformation from "../../components/cart/CartContactInformation"

function Checkout() {
    const [pricingSummary, setPricingSummary] = useState({})

    useEffect(()=>{
        setPricingSummary(JSON.parse(localStorage.getItem("pricingSummary")))
    },[])
    console.log(pricingSummary)

  return (
    <>
          <div className="flex justify-center">
              <div className="pt-11">
                  <div className="container">
                      <h1 className='text-center text-4xl pb-3'> Checkout</h1>
                      <div className='flex justify-center'>
                          <div className='orange_border_product'></div>
                      </div>
                      {/* Main Hero Section */}
                      <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--12 phone_flex_col overflow-x-hidden">
                          <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">
                              <h1 className="text-3xl">Guest Checkout</h1>
                              <div className="mt-5">
                                   <p className="text-base font-bold">Contact information</p>         
                                   <p className="text-sm pt-1">We'll use these details to keep you informed on your delivery.</p>         
                              </div>
                              {/* Enter Contact Info Form Here*/}
                              <CartContactInformation />
                          </div>
                          <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">
                              {/* Pricing Summary Table Here */}
                              <CartPaymentSection cartTotalPriceAmountWithoutDiscount={pricingSummary.cartTotalPriceAmountWithoutDiscount} coupon={pricingSummary.coupon} giftCard={pricingSummary.giftCard} />
                          </div>

                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Checkout
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CartPaymentSection({ cartTotalPriceAmountWithoutDiscount, coupon, giftCard }) {
    const [estimatedTotal, setEstimatedTotal] = useState(0)
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [giftCardDiscount, setGiftCardDiscount] = useState(0)
    const [estimatedTax, setEstimatedTax] = useState(0)

    useEffect(() => {
        // Max Coupon Discount upto $100
        if (((cartTotalPriceAmountWithoutDiscount * coupon) / 100) > 100) {
            setCouponDiscount(100);
        }
        else {
            setCouponDiscount((cartTotalPriceAmountWithoutDiscount * coupon) / 100)
        }
        // Max Gift Card Discount 
        if (((cartTotalPriceAmountWithoutDiscount * giftCard) / 100) > 50) {
            setGiftCardDiscount(50);
        }
        else {
            setGiftCardDiscount((cartTotalPriceAmountWithoutDiscount * giftCard) / 100)
        }

        // Estimated Taxed Amount
        setEstimatedTax((((cartTotalPriceAmountWithoutDiscount - couponDiscount - giftCardDiscount) * 12) / 100).toFixed(2))

        // original cost + (orignalCost- couponDiscounts + tax)
        setEstimatedTotal((cartTotalPriceAmountWithoutDiscount + ((cartTotalPriceAmountWithoutDiscount - couponDiscount - giftCardDiscount) * 12) / 100).toFixed(2))
    }, 
    [coupon, giftCard, cartTotalPriceAmountWithoutDiscount,])
    
    console.log(estimatedTotal)
    
    return (
        <>
            <div className='shadow p-5'>
                <h1 className='text-md font-bold'> Pricing Summary </h1>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full ">
                        {/* <!-- head --> */}
                        <tbody>
                            {/* <!-- row 1 --> */}
                            <tr >
                                <td className='text-base font-light'>Sub Total</td>
                                <td className='flex justify-end'>${cartTotalPriceAmountWithoutDiscount}</td>
                            </tr>
                            <tr >
                                <td className='text-base font-light'>Coupon</td>
                                <td className='flex justify-end'>{coupon > 0 ? <>- $ {couponDiscount}</> : <>- $ 0</>}</td>
                            </tr>
                            {/* <!-- row 3 --> */}
                            <tr >
                                <td className='text-base font-light'>Gift Card</td>
                                <td className='flex justify-end'>{giftCard > 0 ? <> - $ {giftCardDiscount}</> : <>- $ 0</>}</td>
                            </tr>
                            <tr >
                                <td className='text-base font-light'>Estimated Tax</td>
                                <td className='flex justify-end'>${((cartTotalPriceAmountWithoutDiscount * 12) / 100).toFixed(2)}</td>
                            </tr>
                            <tr >
                                <td className='text-base font-light'>Estimated Shipping</td>
                                <td className='flex justify-end'>FREE</td>
                            </tr>
                            <tr >
                                <td className='text-base font-bold'>Estimated Total</td>
                                <td className='flex justify-end font-bold'>$ {(cartTotalPriceAmountWithoutDiscount + ((cartTotalPriceAmountWithoutDiscount - couponDiscount - giftCardDiscount) * 12) / 100).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>

        </>
    )
}

export default CartPaymentSection
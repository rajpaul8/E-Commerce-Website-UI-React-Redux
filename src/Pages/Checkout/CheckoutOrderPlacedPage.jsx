import React, { useState, useEffect } from 'react'
import CartItemEditableCard from '../../components/cart/CartItemEditableCard';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

function CheckoutOrderPlacedPage() {
    const randomNumber = Math.floor((Math.random() * 1000000) + 100000);
    // Shipping info from local storage guestContactInfo
    const [guestContactInfo, setGuestContactInfo] = useState(JSON.parse(localStorage.getItem('guestContactInfo')))

    // Shipping Method from local storage paymentInformation
    const [paymentInfo, setPaymentInfo] = useState(JSON.parse(localStorage.getItem("pricingSummary")))

    const [shipingDetails, setShippingDetails] = useState({ shippingMethod: '', shippingTime: '', shippingCost: '' })

    useEffect(() => {
        if (paymentInfo.shipping == 0) {
            setShippingDetails({ shippingMethod: 'Standard Shipping', shippingTime: '4-8 business days via USPS', shippingCost: 'FREE' })
        }
        else if (paymentInfo.shipping == 17.95) {
            setShippingDetails({ shippingMethod: 'Express Delivery', shippingTime: '2-5 business days via USPS', shippingCost: ' $17.95' })
        } else if (paymentInfo.shipping == 53.61) {
            setShippingDetails({ shippingMethod: 'Next Day Delivery', shippingTime: 'Next business days via FedEx', shippingCost: '$53.61' })
        }
    }, [])

    // Payment Information 
    const [lastFourDigitsOfCreditCard, setLastFourDigitsOfCreditCard] = useState(0);

    useEffect(() => {
        let paymentInfo = JSON.parse(localStorage.getItem('paymentInformation'));
        let last4DigitsLocal = paymentInfo.cardNumber.slice(-4)
        setLastFourDigitsOfCreditCard(last4DigitsLocal);
    }, [lastFourDigitsOfCreditCard]);


    // 
    return (
        <>
            <div className="flex justify-center">
                <div className="pt-11">
                    <div className="container">
                        <h1 className='text-center text-4xl pb-3'> Order Successful!</h1>
                        <div className='flex justify-center'>
                            <div className='orange_border_product'></div>
                        </div>
                        {/* Main Hero Section */}
                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--12 phone_flex_col overflow-x-hidden">
                            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">
                                <h1 className="text-lg font-bold mb-5">Order Number # {randomNumber}</h1>
                                {/* Contact Information  */}
                                <div>
                                    <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--12 phone_flex_col overflow-x-hidden">
                                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 md:pr-2">
                                            {/* Shipping Information */}
                                            <h1 className='font-bold'>Shipping Information</h1>
                                            <p className='text-sm'>{guestContactInfo.email}</p>
                                            <p className='text-sm'>{guestContactInfo.phone}</p>
                                            <br></br>
                                            <p className='text-sm'>{guestContactInfo.streetAddress}</p>
                                            <p className='text-sm'>{guestContactInfo.streetAddress2}</p>
                                            <p className='text-sm'>{guestContactInfo.zip}</p>
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 md:pr-2">
                                            {/* Shipping Method */}
                                            <h1 className='font-bold'>Shipping Method</h1>
                                            <p className='text-sm'>{shipingDetails.shippingMethod}</p>
                                            <p className='text-sm'>{shipingDetails.shippingTime}</p>
                                            <p className='text-sm'>{shipingDetails.shippingCost}</p>
                                            <br></br>
                                            {/* Payment Method */}
                                            <h1 className='font-bold'>Payment Information</h1>
                                            <p className='text-sm'>Credit Card</p>
                                            <p className='text-sm'>Visa ending in {lastFourDigitsOfCreditCard}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Items Card Card Here */}
                                <div className='mt-3 mr-11'>
                                    <CartItemEditableCard className="" />
                                </div>
                                <div className='mt-5 text-sm'>
                                    <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                                    <p className='mt-4 '>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side Section Comes Here */}
                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2 hidden md:block">
                                {/* Sales Banner Orange Color Comes Here.. */}
                                <div className='orangeBannerBox p-24 h-96'>
                                    <div>
                                        <h1 className='text-4xl '>Give us a follow to Save 20% on your next</h1>
                                    </div>
                                    <br></br>
                                <div className="flex text-3xl justify-evenly space-x-5 ">
                                    <FiFacebook />
                                    <FiInstagram />
                                    <FiTwitter />
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutOrderPlacedPage
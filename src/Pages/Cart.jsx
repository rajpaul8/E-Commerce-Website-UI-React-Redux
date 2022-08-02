import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItems from '../components/cart/CartItems';
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { getTotals } from '../features/cart/cartSlice';
import { useEffect } from 'react';
import CartPaymentSection from '../components/cart/CartPaymentSection';
import { RiArrowDropDownLine } from 'react-icons/ri'

function Cart() {
    const cart = useSelector((state) => state.cart);
    const [coupon, setCoupon] = useState(0);
    const [giftCard, setGiftCard] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    return (
        <>
            <div className="flex justify-center">
                <div className="pt-11">
                    <div className="container">
                        <h1 className='text-center text-4xl pb-3'> Your Shopping Bag</h1>
                        <div className='flex justify-center'>

                            <div className='orange_border_product'></div>
                        </div>
                        {/* Main Hero Section */}
                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--12 phone_flex_col overflow-x-hidden">
                            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">
                                {/* Bag Items Here */}
                                <div className=''>
                                    {cart.cartItems.length === 0 ? (<>
                                        <div className='flex justify-center pt-12'>
                                            <h1 className='text-2xl'> No Item in your Cart</h1>
                                        </div>
                                        <div className='flex justify-center pt-3'>

                                            <Link to='/products'><button className='organgeButtonFilled flex justify-center items-center'><IoArrowBackCircleOutline className='text-2xl' /> &nbsp; Shop Now </button></Link>
                                        </div>
                                    </>) : (

                                        <CartItems cartItems={cart.cartItems} />
                                    )}
                                </div>

                                {/* Estimate your shipping Section Here*/}
                                <div className='lg:mt-52 mt-11 border'>
                                    <div class="collapse border">
                                        <input type="checkbox" />
                                        <div class="collapse-title text-base font-medium flex justify-between">
                                            <div>Estimate your Shipping </div><div className='text-2xl'><RiArrowDropDownLine /></div>
                                        </div>
                                        <div class="collapse-content flex justify-between">
                                            {/* Need to handle the shipping address logic here... and then remove readonly */}
                                            <input type="text" value='' readOnly className='border rounded-md' placeholder='Complete Address' />
                                            <input type="text" value='' readOnly className='border rounded-md' placeholder='Pincode' />
                                        </div>
                                    </div>
                                    <div class="collapse border">
                                        <input type="checkbox" />
                                        <div class="collapse-title text-base font-medium flex justify-between">
                                            <div>Enter Coupon <span className='text-sm'>(Upto $100)</span> </div><div className='text-sm flex'>{coupon}% coupon applied <RiArrowDropDownLine className='text-2xl' /></div>
                                        </div>
                                        <div class="collapse-content flex justify-between">
                                            {/* Need to handle the logic of verifying the coupon code ... and then remove readonly */}
                                            <input type="text" value='' readOnly className='border rounded-md' placeholder='Apply Coupon' />
                                            <button className='btn btn-outline btn-warning' onClick={() => setCoupon(10)}> NewBie 10% Off </button>
                                            <button className='btn btn-outline btn-warning' onClick={() => setCoupon(40)}> Special Offer 40% Off </button>
                                        </div>
                                    </div>
                                    <div class="collapse border">
                                        <input type="checkbox" />
                                        <div class="collapse-title text-base font-medium flex justify-between">
                                           
                                            <div>Apply Gift Card <span className='text-sm'>(Upto $50)</span></div><div className='text-2xl'><RiArrowDropDownLine /></div>
                                        </div>
                                        <div class="collapse-content flex justify-between">
                                            {/* Need to handle the logic of verifying the giftcard string... and then remove readonly */}
                                            <input type="text" value='' readOnly className='border rounded-md' placeholder='Apply GiftCard' />
                                            <button className='btn btn-outline btn-warning' onClick={() => setGiftCard(10)}> Birthday Off 20%</button>
                                            <button className='btn btn-outline btn-warning' onClick={() => setGiftCard(40)}> Special Offer 25% Off </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--1 aem-GridColumn--phone--12 md:pr-2">
                                {/* Pricing Summary Table Here */}
                                <CartPaymentSection cartTotalPriceAmountWithoutDiscount={cart.cartTotalAmount} coupon={coupon} giftCard={giftCard} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
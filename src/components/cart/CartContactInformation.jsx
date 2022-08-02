import React, { useState } from 'react'

function CartContactInformation() {
    const [contactForm, setContatcForm] = useState({
        email:'',
        phone:'',
        country:  '',
        firstName: '',
        lastName: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip:null
    })

    const handleOnChange = (e)=>{
        e.preventDefault();

    }
    return (
        <>
            <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                    <label htmlFor="email" className='text-xs flex column font-bold'>Email</label>
                    <input type="email" name="email" value= '' required className='rounded-md border' placeholder='abc@xyz.com' onChange={()=>handleOnChange()} />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                    <label htmlFor="email" className='text-xs flex column font-bold'>Phone number</label>
                    <input type="email" name="email" value='' required className='rounded-md border text-md' placeholder='(022) 222 - 22222' onChange={() => handleOnChange()} />
                </div>
            </div>

            <div className='mt-5'>
                <h1 className='text-lg font-bold'>1. Shipping Information</h1>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="country" className='text-xs flex column font-bold'>Email</label>
                        <input type="text" name="country" value='' className='rounded-md border w-full' placeholder='United States' onChange={() => handleOnChange()} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="firstName" className='text-xs flex column '>First Name</label>
                        <input type="text" name="firstName" id='firstName' value='' required  className='rounded-md border w-full' onChange={() => handleOnChange()} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="lastName" className='text-xs flex column '>Last Name</label>
                        <input type="text" name="lastName" id='lastName' value='' required  className='rounded-md border w-full' onChange={() => handleOnChange()} />
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="streetAddress" className='text-xs flex column '>Street Address</label>
                        <input type="text" name="streetAddress" id='streetAddress' required  value='' className='rounded-md border w-full' onChange={() => handleOnChange()} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="streetAddress2" className='text-xs flex column '>Street Address 2 (optional)</label>
                        <input type="text" name="streetAddress2" id='streetAddress2'  required value='' className='rounded-md border w-full' onChange={() => handleOnChange()} />
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--12 aem-Grid--phone--12 phone_flex_col overflow-x-hidden mt-4">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="city" className='text-xs flex column '>City</label>
                        <input type="text" name="city" id='city' required  value='' className='rounded-md border w-full' onChange={() => handleOnChange()} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="state" className='text-xs flex column '>State</label>
                        <input type="text" name="state" id='state'  required value='' className='rounded-md border w-full' onChange={() => handleOnChange()} />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--12 md:pr-2">
                        <label htmlFor="zip" className='text-xs flex column '>Zip</label>
                        <input type="text" name="zip" id='zip' required  value='' className='rounded-md border w-full' onChange={() => handleOnChange()} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-7'>
                <button className='continueShoppingButton text-md'> CONTINUE TO SHIPPING METHOD </button>
            </div>

            <div className='mt-9'>
                <hr />
                <h1 className='text-lg pt-3 pb-3'>2. Shipping Information</h1>
                <hr />

            </div>
        </>
    )
}

export default CartContactInformation
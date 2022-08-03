import React, { useEffect, useState } from 'react'
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// cardName: "2133211232", cardNumber: "0231312231", expirationDate: "2022-08-15", CVV: "021312"
function PaymentEditableCard() {
    const [lastFourDigitsOfCreditCard, setLastFourDigitsOfCreditCard] = useState(0);

    useEffect(() => {
        let paymentInfo = JSON.parse(localStorage.getItem('paymentInformation'));
        let last4DigitsLocal = paymentInfo.cardNumber.slice(-4)
        setLastFourDigitsOfCreditCard(last4DigitsLocal);
    }, [lastFourDigitsOfCreditCard]);


    return (
        <>
            <div className='mt-7 mb-5 border shadow'>
                <div className="overflow-x-auto p-3">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th className='capitalize bg-white text-md'>
                                    <h2>Payment Method</h2>
                                </th>
                                <th className='bg-white flex justify-end capitalize'>
                                    <div>
                                        <Link to='/checkout/payment-information' className='text-sm flex' style={{ color: "#e26a2c" }}>
                                            <BsPencil className='mr-1' /> Edit
                                        </Link>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>
                                        <p>Credit Card</p>
                                        <p>Visa ending in {lastFourDigitsOfCreditCard}</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PaymentEditableCard
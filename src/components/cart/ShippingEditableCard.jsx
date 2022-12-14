import React, { useEffect, useState } from 'react'
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ShippingEditableCard() {
    const { pricingSummary } = useSelector(state => state.pricing)
    const [shipingDetails, setShippingDetails] = useState({ shippingMethod: '', shippingTime: '', shippingCost: '' })

    useEffect(() => {
        if (pricingSummary.shipping == 0) {
            setShippingDetails({ shippingMethod: 'Standard Shipping', shippingTime: '4-8 business days via USPS', shippingCost: 'FREE' })
        }
        else if (pricingSummary.shipping == 17.95) {
            setShippingDetails({ shippingMethod: 'Express Delivery', shippingTime: '2-5 business days via USPS', shippingCost: ' $17.95' })
        } else if (pricingSummary.shipping == 53.61) {
            setShippingDetails({ shippingMethod: 'Next Day Delivery', shippingTime: 'Next business days via FedEx', shippingCost: '$53.61' })
        }
    }, [pricingSummary])

    return (
        <>
            <div className='mt-7 mb-5 border shadow'>
                <div className="overflow-x-auto p-3">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th className='capitalize bg-white text-md'>
                                    <h2>Shipping Method</h2>
                                </th>
                                <th className='bg-white flex justify-end capitalize'>
                                    <div>
                                        <Link to='/checkout/shipping-information' className='text-sm flex' style={{ color: "#e26a2c" }}>
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
                                        <p>{shipingDetails.shippingMethod}</p>
                                        <p>{shipingDetails.shippingTime}</p>
                                        <p>{shipingDetails.shippingCost}</p>
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

export default ShippingEditableCard
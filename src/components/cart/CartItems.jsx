import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineHeart } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'
import { ImBin } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { removeFromCart, decreaseCart, addToCart } from '../../features/cart/cartSlice';

function CartItems({ cartItems }) {
    const dispatch = useDispatch();

    const handleCartQuantityDecreament = (item) => {
        if(item.cartQuantity === 1){
            alert(`You're about to remove ${item.title}. Are you sure about it?`);
        }
        dispatch(decreaseCart(item));
    }
    const handleQuantityIncreament = (item) => {
        // setQuantity(quantity + 1);
        dispatch(addToCart(item));
    }

    const handleRemoveItem = (item) => {
        alert(`You're about to remove ${item.title}. Are you sure about it?`);
        dispatch(removeFromCart(item));
    }

    return (
        <>
            {/* <!-- Cart --> */}
            <div className="overflow-x-auto w-full">
                <table className="table table-compact">
                    {/* <!-- head --> */}

                    <tbody>
                        {cartItems?.map((item) => {
                            return <>
                                {/* <!-- row 1 --> */}
                                <tr key={item.id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className=" lg:w-44 lg:h-52 w-">
                                                    <img src={item.image} alt="" className='!object-contain' />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='flex'>
                                        <div className='space-y-1'>
                                            <div className="font-bold whitespace-normal">{item.title} </div>
                                            {/* <div className="text-sm opacity-50 whitespace-normal">Default</div>
                                            <div className="text-sm opacity-50 whitespace-normal">Default</div> */}
                                            <div className="opacity-90 whitespace-normal">$ {item.price*item.cartQuantity}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex'>
                                            {/* Increment and Decrement Bar */}
                                            <div className='flex'>
                                                <button className='decrementer text-2xl pr-2' onClick={() => handleCartQuantityDecreament(item)}><AiOutlineMinusCircle /></button>
                                                <div>
                                                    <input type="number" className='quantity-counter-cart text-center' disabled value={item.cartQuantity} onChange={()=>e=>e.target.value} />
                                                </div>
                                                <button className='text-2xl pl-2 ' onClick={() => handleQuantityIncreament(item)}><AiOutlinePlusCircle /></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='flex'>
                                        {/* For large screen */}
                                        <div className='hidden lg:block'>
                                            <ul className="menu">
                                                <li><Link to={`/products/${item.category}/${item.id}`} className='flex'><BiPencil /> Edit</Link></li>
                                                <li><button onClick={() => handleRemoveItem(item)}> <ImBin /> Remove</button></li>
                                                <li><button> <AiOutlineHeart /> Save for later </button></li>
                                            </ul>
                                        </div>

                                        {/* For small screens */}
                                        <div className="dropdown dropdown-end lg:hidden">
                                            <label tabIndex="0" className="">
                                                <button>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                                </button>
                                            </label>
                                            <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100">
                                                <li><button> <BiPencil /> Edit</button></li>
                                                <li><button> <ImBin /> Remove</button></li>
                                                <li><button> <AiOutlineHeart /> Save for later </button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </>
                        })}
                    </tbody>
                </table>
            </div>

            {/* <!-- End Cart --> */}

        </>
    )
}

export default CartItems
import Header from "../../components/Header"
import Image from "next/image"
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slices/basketSlice"
import Currency from 'react-currency-formatter';

import CheckoutProduct from "../../components/CheckoutProduct";
import { useSession } from "next-auth/react";

function Checkout() {
    const items = useSelector(selectItems);
    const {session} = useSession();
    // console.log(items)
    const total = useSelector(selectTotal);
  return (
    <div className="bg-gray-100">
        <Header />
        <main className="lg:flex flex-col max-w-screen-2xl mx-auto">
            <div className="flex-grow m-5 shadow-sm">
            {/* Left hand side */}
            <Image 
            src="https://links.papareact.com/ikj" 
            width={1020} 
            height={250} 
            objectFit="contain" />

            </div>
            <div className="flex flex-col space-y-10 bg-white p-5">
                <h1 className="text-3xl border-b pb-4">
                    {items.length === 0 ? 'Your basket is empty': 'Shopping basket'}
                </h1>
                {items.map((item, i) => (
                    <CheckoutProduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    price= {item.price}
                    rating={item.rating}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    hasPrime={item.hasPrime}
                    />
                ))}

            </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
            {items.length > 0 && (
                <>
                    <h2 className="whitespace-nowrap">Subtotal ({items.length} items): {" "}
                    <span className="font-bold">
                        <Currency quantity={total} currency="USD"/>
                    </span>
                    </h2>
                    <button 
                    disabled={!session}
                    className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 text-gray-200 border-gray-300 cursor-not-allowed '} `}>
                        {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                    </button>
                </>
            )}
        </div>
        </main>
        
    </div>
  )
}

export default Checkout
// from bg-gray-100 to bg-gray-300 border-gray-200 text-gray-300 cursor-not-allowed 
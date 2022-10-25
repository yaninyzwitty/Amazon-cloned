import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { removeFromBasket, addToBasket } from "../src/slices/basketSlice";


function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    // passing the id as an object so as to remove it from the redux store
    dispatch(removeFromBasket({ id }))
  }

  const addItemToBasket = () => {
    const product = {
      id, 
      title, 
      price, 
      rating, 
      description, 
      category, 
      image, 
      hasPrime

    }
    // item pushed to the redux store
    dispatch(addToBasket(product))


  };
  return (
    <div className="grid grid-cols-6">
      <Image src={image} height={250} width={250} objectFit="contain" />
      {/* middle */}
      <div className="col-span-3 mx-5">
        <p>{ title }</p>
        <div className="flex">
        {Array(rating)
            .fill()
            .map((_, i) => (

                <StarIcon key={i} className="h-5 text-yellow-500"/>

            ))}
  
        </div>
        <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img 
            loading="lazy"
            className="w-12"
            src="https://links.papareact.com/fdw" 
            alt="" />
            <p className="text-xs text-gray-500">Free next day delivery</p>

          </div>
        )}
      </div>
      {/* Right button >>> addd or remove */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
      <button 
         onClick={addItemToBasket}
         className="mt-auto button border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">
            Add to Basket
            </button>
        <button 
         onClick={removeItemFromBasket}
         className="mt-auto button borderborder-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 ">
            Remove from Basket
            </button>
      </div>
    </div>
  );
}

export default CheckoutProduct
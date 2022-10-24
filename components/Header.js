import Image from 'next/image'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../src/slices/basketSlice';



function Header() {
  const {session} = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  



  

  return (
    <header>
        {/* TOP NAV */}
        {/* <h2>Hello world</h2> */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
            onClick={() => router.push('/')}
            src='https://links.papareact.com/f90' 
            width={150}
            height={40}
            alt=""
            className="cursor-pointer"
            />
          </div>
          {/* Custom search */}
          <div className="hidden sm:flex items-center rounded-md flex-grow cursor-pointer h-10  bg-yellow-400 hover:bg-yellow-500">
            <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' />
            <MagnifyingGlassIcon className='h-12 p-4' />
          </div>
          {/* RIGHT HAND SIDE */}
          <div className='text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap'>
            {/* if not signed in say sign in else say the session.user.name */}
            <div onClick={!session ? () => signIn() : () => signOut()} className='link cursor-pointer'>
              <p className='hover:underline'>
                {session ? `hello ${session.user.name}`: "Sign In"}
              </p>
              <p className='font-extrabold md:text-sm'>Account & lists</p>
            </div>
            <div className='link'>
              <p>Returns</p>
              <p className='font-extrabold md:text-sm'>& drafts</p>
            </div>
            <div onClick={() => router.push('/checkout')} className='relative link flex items-center'>
              <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>
              <ShoppingCartIcon className='h-10' />
              <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
            </div>
          </div>
          

        </div>
        {/* LOWER NAV */}
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
          <p className='link flex items-center'>
          <Bars3Icon className='h-6 mr-1'/>
            All

          </p>
          <p className='link'>Prime Video</p>
          <p className='link'>Amazon Business</p>
          <p className='link'>Today's deals</p>
          <p className='hidden link lg:inline-flex'>Elecronics</p>
          <p className='hidden link lg:inline-flex'>Food</p>
          <p className='hidden link lg:inline-flex'>Buy Again</p>
          <p className='hidden link lg:inline-flex'>Shopper Toolkit</p>
          <p className='hidden link lg:inline-flex'>Personal Care</p>



        </div>
        <div>

        </div>
        </header>
  )
}

export default Header
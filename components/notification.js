import { Popover, Transition } from '@headlessui/react'
import { Fragment ,} from 'react'
import {FaHeart} from 'react-icons/fa';

export default function Not(){
  return(

      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90 '}
                `}
            >
              <FaHeart  className={`${!open?"":"text-red-600"} cursor-pointer text-gray-700 translate-y-1 md:hover:text-red-600 w-6 h-6`}/>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white  left-1/2 z-10 mt-3 w-screen max-w-sm lg:-translate-x-1/2 -translate-x-1/3 transform px-4 sm:px-0 lg:max-w-lg">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 text-sm px-4">
                 <div className="text-sm pt-2">
                   Earlier
                 </div >
                  <div className="flex py-5 items-center justify-between">
                  <img src="https://i.ibb.co/L80kYdB/medona.jpg" className="rounded-full w-8 h-8"/>
                  <p className="flex-1 px-2"><span className="cursor-pointer text-sm text-gray-400">madonnasebastianofficial</span> Posted new reel<span className="text-gray-400 text-xs pl-2">1day</span></p>
                  <img src="https://i.ibb.co/tcypJ54/nehashetty.jpg " className=" w-9 h-9"/>
                    </div>
                 </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
  
  )
}
import { Tab } from '@headlessui/react'
import {BsGrid3X3,BsCameraReels} from 'react-icons/bs'
import {FiPocket} from 'react-icons/fi'
import { Fragment } from 'react'


export default function Protab(){


  return(
    <div className="flex text-gray-400 justify-center">
    <div className="  max-w-3xl w-full border-t ">
      <Tab.Group  >
      <Tab.List className="flex justify-evenly space-x-4">
        <Tab as={Fragment}>
          {({selected})=> (<p className={`outline-none flex space-x-2 py-2 items-center cursor-pointer px-2 ${!selected?"border-hidden":" text-black border-t border-black"}`}>          <BsGrid3X3 className="w-3 h-3"/><p>Posts</p>
      </p>)}
      </Tab>
         <Tab as={Fragment}>
          {({selected})=> (<p className={`outline-none flex space-x-2 py-2 items-center cursor-pointer px-2 ${!selected?"border-hidden":" text-black border-t border-black"}`}>          <BsCameraReels className="w-4 h-4"/><p>Reels</p>
      </p>)}
      </Tab>
         <Tab as={Fragment}>
          {({selected})=> (<p className={`outline-none flex space-x-2 py-2 items-center cursor-pointer px-2 ${!selected?"border-hidden":" text-black border-t border-black"}`}>          <FiPocket className="w-4 h-4"/><p>Saved</p>
      </p>)}
      </Tab>
        
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Posts</Tab.Panel>
        <Tab.Panel>Reels</Tab.Panel>
        <Tab.Panel>Saved</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
      </div>
  )
}
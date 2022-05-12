import Image from 'next/image'
import logo from './logo.jpg'
import {stories} from './storiesdata.js'
import Head from 'next/head'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'

export default function Chat(){
  const arr = stories.slice(0,6)
  return (
  
  <div className="">
    <div className="sm:flex max-w-4xl h-[80vh] border border-black-500 m-auto mt-5">
      <div className="basis-1/2 md:basis-1/3 flex flex-col border-r border-black-500">
        <div className=" flex items-center justify-center  py-4 font-medium border-b border-black-500">
          
          <p>aspiro__</p>
          <MdOutlineKeyboardArrowDown className="w-7 h-7  "/>
          
          <FiEdit className="translate-x-16 w-6 h- hover:cursor-pointer"/></div>
        
        
        <div className="flex-col hover:cursor-pointer overflow-auto scrollbar-hide">
          {arr.map(storie => 
          <div key= {storie.id} className="flex p-2  hover:bg-gray-200 ">
            <img className="rounded-full h-14 w-14" src={storie.url} layout="fill"/>
            <div className="flex flex-col p-2">
              <div>{storie.name}</div>
              <div className="text-sm font-thin  text-black-200">
                {storie.id%2 == 0 ? "Sent you a message. 4w":"Text you later. 3w"}
                </div>
            </div>
          </div>
          )}
        </div>
    </div>
      
      <div className="basis-1/3 hidden sm:basis-2/3  text-center m-auto sm:block">
        <Image className="rounded-full"
          src = {logo}
          width ={120}
          height ={120}
          />
        <div className="text-xl text-black-500 m-2">Your messages</div>
        <div className="text-sm font-thin text-black-200 m-2">Send private photos and messages to a friend or group.</div>
        <button type="button" className="text-white bg-blue-500 hover:cursor-pointer font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2">Send message</button>
      </div>
    </div>
    </div>
    
  )
}
import Image from 'next/image';
import {useState,useRef} from 'react';
import {FaRegHeart,FaHeart ,FaRegComment} from 'react-icons/fa';
import { FiSend,FiPocket } from "react-icons/fi";
import {BsEmojiSmile} from "react-icons/bs"


export default function Post({data}){
  const [like,setLike]=useState(false);
  const ref=useRef(null)
  return(
    <div className='flex pt-4 justify-center tems-center '>
      <div className="max-w-xl  w-full  border">
        <div className="flex items-center  p-2"> 
          <div className="  bg-gradient-to-tr from-yellow-500 to-red-600 p-[1.5px] rounded-full  ">
            <div className="bg-white p-1 rounded-full">
              <img src={data.url} className="rounded-full  h-8 w-8 "/>
            </div>
          </div>
      <p className='font-bold p-2 flex-1'>{data.name}</p>
      <p className=' hover:cursor-pointer font-bold px-4'>...</p>
    </div>
    <Image  src={data.post}
        alt="samantha"
      objectFit="cover"
      layout="responsive"
      height={16}
      width={9}
    />
  <div className='flex items-center w-full'>
    <div className='flex-1 py-4 px-4 space-x-4 flex items-center'>
      <div onClick={()=>setLike(!like)}> 
        {like?<FaHeart className="w-6 hover:animate-pulse h-6 text-red-700 hover:cursor-pointer"/>:<FaRegHeart  className="w-6 hover:animate-pulse h-6 hover:cursor-pointer"/>}
        </div>
      <FaRegComment onClick={()=>ref.current.focus()} className='w-6 h-6 hover:cursor-pointer'/>
      <FiSend className=' w-6 h-6 hover:cursor-pointer'/>
  </div>
    <div className='px-4'>
      <FiPocket className=' w-6 h-6 hover:cursor-pointer'/>      
    </div>
    
  </div>
    <div className="px-4 py-2">
      <p className='font-bold'>300,000 likes</p>
    </div>
    <div className='flex px-4 py-2'> 
      <p className="font-bold">{data.name}</p>
      <p className="px-2">Caption</p>
    </div>
    <div className="border-t py-2 flex items-center">
      <div className="px-3">
      <BsEmojiSmile className="w-6 h-6 "/></div>
      <input ref={ref} className="h-10 w-full focus:outline-none " placeholder="Add a comment"/>
      <p className="font-bold text-blue-500 px-2" >Send</p>
      </div></div>
      
      
    </div>
  )
}
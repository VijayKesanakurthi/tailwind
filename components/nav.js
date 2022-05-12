import {FaSearch,FaFacebookMessenger,FaInstagram,FaHeart,FaHome,FaPlusSquare} from 'react-icons/fa';
import {MdExplore} from 'react-icons/md';
import {HiHome} from 'react-icons/hi';
import Link from 'next/link'
import Not from './notification'

export default function Nav({children,comp}){
  return (
    <div>
    <div className="sticky top-0  flex-col sm:flex-row z-50 px-50 sm:px-10  py-1 sm:py-3 border flex justify-center  md:justify-around  w-full items-center  bg-white shadow-xs shadow-gray-200">
      <Link href="/">
        <div className='flex  pb-4 sm:pb-0 text-pink-500 sm:text-black hover:text-pink-500 cursor-pointer items-center '> 
          <div className='px-1'>
            <FaInstagram className={`text-black-200 w-6 h-6 ${comp==="nav"?"bg-red":""}  `}/>
          </div>
          <h1 className="text-black-900  font-bold">Instagram</h1>        
          </div>
      </Link>
      
      <div className="w-300 bg-gray-200  text-gray-900  border rounded-md p-2 justify-center hidden sm:flex items-center group">
        <FaSearch className=" text-gray-400"/>
      <input className="px-2   bg-gray-200 focus:outline-none " placeholder="Search"/>
      </div>
      <div className='flex items-center justify-evenly'>
      <Link href="/">
          <div className='px-2'>
            <HiHome  className={`cursor-pointer hover:text-purple-400 text-black-200 w-7 h-7 ${comp==="nav"?"text-purple-400":"text-gray-700 "}  `}/>
          </div>
        </Link>
      
          <div className='px-2 flex items-center justify-center'>
            {/*<FaHeart className="cursor-pointer text-gray-700 hover:text-red-600 w-6 h-6"/>*/}
              <Not/>
          </div>
        <Link href="inbox">
          <div className='px-2'>
            <FaFacebookMessenger className={`cursor-pointer text-black-200 w-6 h-6 hover:text-blue-700 ${comp==="inbox"?"text-blue-500":"text-gray-700"}  `}/>
          </div >
        </Link>
          <div className='px-2'>
             <FaPlusSquare className='text-gray-700 w-6 h-6 cursor-pointer hover:text-blue-500'/>
          </div>
        <Link href="explore">
          <div className='px-2'>
            <MdExplore className='text-gray-700 w-7 h-7 cursor-pointer hover:text-blue-500'/>
          </div>
        </Link>
        <Link href="aspiro">
          <div className='px-2'>
             <div className="bg-gray-800 p-[1px]  rounded-full hover:cursor-pointer">
              <img src="https://i.ibb.co/LvnM3LC/aspiro.jpg" className="rounded-full  h-7 w-7 "/>
            </div>
          </div>
          </Link>
        </div>
    </div> 
    {children}
  </div>
  )
}
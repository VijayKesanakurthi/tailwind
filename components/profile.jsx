import {IoIosSettings} from 'react-icons/io';

export default function Profile(){


  return(
    <div className="flex flex-col justify-space overflow-hidden  align-center  ">
      <div className="w-full flex  justify-start mx-[2rem] lg:mx-[20vw] py-10 h-full ">
        <div className="flex-1/3 px-[2rem] ">
        <img src="https://i.ibb.co/LvnM3LC/aspiro.jpg" className=" rounded-full  "/>
          </div>
        <div className="flex flex-col flex-2/3 px-4 w-full justify-between items-start ">
          
          <div className="flex justify-between flex-wrap sm:flex-nowrap  sm:space-x-4   ">
            <p className="text-[1.5rem] ">aspiro__</p>
            <button className="px-3 py-[4px] text-md font-medium text-sm bg-white border rounded-lg ">
              Edit Profile
            </button>
            <IoIosSettings className="hidden sm:block hover:animate-spin cursor-pointer h-7 w-7"/>
          </div>
          
          <div className=" hidden sm:flex space-x-4 justify-between font-light">
            <p><b>2</b> posts</p>
            <p><b>5</b> followers</p>
            <p><b>376</b> following</p>
          </div>
          
          <div className="break-all">
            This is bio
          </div>
          
        </div>
      </div>
    </div>
  )
}
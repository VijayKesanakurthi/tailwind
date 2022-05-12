import {IoIosArrowDroprightCircle,IoIosArrowDropleftCircle} from 'react-icons/io';
import {stories} from './storiesdata.js'
import Story from './story'
import {useState,useRef} from 'react';



export default function Storie() {
  const ref=useRef(null);
  const [left,setLeft]=useState(false);
  const [right,setRight]=useState(false);

  const onScroll=()=>{
    if(ref.current.scrollLeft>0) setLeft(true)
    else setLeft(false)
    if(ref.current.scrollLeft===ref.current.scrollWidth-ref.current.clientWidth) setRight(true)
    else setRight(false)
    
  }
  return (
    <div className="relative max-w-xl w-full border">
      
   <div onScroll={onScroll} ref={ref} className="flex overflow-x-scroll scrollbar-hide sm:p-4 p-2 scroll-smooth bg-white ">
     {stories.map((e)=>
     <Story key={e.id} url={e.url} name={e.name}/>
     )}
    </div>
      
      <IoIosArrowDropleftCircle onClick={()=>ref.current.scrollLeft-=300} className={`shadow-sm w-6 h-6 text-white rounded-full absolute top-1/3 hover:cursor-pointer ${!left?"invisible":""}`}/>
        
      
      
      <IoIosArrowDroprightCircle onClick={()=>ref.current.scrollLeft+=300} className={`absolute shadow-sm w-6 h-6 text-white rounded-full right-0 top-1/3 hover:cursor-pointer ${right?"invisible":""}`}/>
      </div>
  )
} 
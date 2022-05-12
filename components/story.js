

export default function Story ({url,name}){
 
  return (
    <div className="px-2">
      <div className="bg-gradient-to-tr from-yellow-500 to-red-600 p-[1.5px] rounded-full  ">
      <div className="bg-white p-1 rounded-full">
     <img src={url} className="rounded-full  h-14 w-14 "/>
  </div></div>
      <p className="text-xs text-md w-16 text-center truncate">{name}</p>
    </div>
  )
}

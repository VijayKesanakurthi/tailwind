
import {stories} from './storiesdata.js'
import Post from './post'


export default function Posts(){
const data=stories.slice(0,6);
  return(<div>
    {data.map((e)=><Post key={e.id} data={e}/>)}
  </div>
  )
}
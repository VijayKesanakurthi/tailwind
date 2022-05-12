import Head from 'next/head'
import Image from 'next/image'
import Nav from "../components/nav"
import Status from "../components/status"
import Posts from "../components/posts"


// import '../styles/globals.css'

  export default function Home(){
    return (
      <div >
        <Head>
          <title> Instagram</title>
               <link rel='icon' type="image/icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346" />
          
        </Head>
      <Nav comp={"nav"}>
        <Status/>
        <Posts/>
      </Nav>
      
    </div>
  )
}

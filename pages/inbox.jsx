
import Nav from "../components/nav"
import Chat from "../components/Inbox"
import Head from 'next/head'
import  "../public/icon.ico"


export default function Inbox(){
  return (
    <div className="h-screen overflow-y-scroll">
       <Head>
          <title> Inbox . Chats</title>
              <link rel='icon' type="image/icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346" />
          
      </Head>
      <Nav comp="inbox">
           <Chat />
      </Nav>
    </div>
  )
}
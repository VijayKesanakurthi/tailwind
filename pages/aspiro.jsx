import Nav from "../components/nav"
import Head from 'next/head'
import Profile from "../components/profile"
import Protab from "../components/protab"


const Aspiro=()=>{

  return(
    <div>
      <Head>
          <title>......... (@aspiro__). Instagram ph</title>
         </Head>
    <Nav>
      <Profile/>
      <Protab/>
    </Nav>
      </div>
  )
}

export default Aspiro;
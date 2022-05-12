 import Nav from "../components/nav"
import Head from 'next/head'

const Explore=()=>{

  return(
    <div className="h-screen overflow-y-scroll">
      <Head>
          <title> Instagram</title>
          
      </Head>
      <Nav >
        explore
      </Nav>
    </div>
  )
}

export default Explore;
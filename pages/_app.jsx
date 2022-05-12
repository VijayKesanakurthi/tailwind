import '../styles/globals.css'
import '../styles/nprogress.css'

import NProgress from "nprogress";
import { useEffect } from "react";
import Router from "next/router";
import Head from 'next/head'
import  "../public/icon.ico"

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
  
    <Head>    
          <link rel='icon' type="image/icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346" />
          
      </Head>
  return <Component {...pageProps} />
}

export default App;

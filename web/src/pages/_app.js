import '@/styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MyContextProvider } from '@/contexts/flagSideBar';


export default function App({ Component, pageProps }) {
  return(
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  )  
}

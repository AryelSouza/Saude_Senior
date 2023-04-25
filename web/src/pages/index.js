import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import stylesGlobal from '@/styles/Global.module.css'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import SideBar from '@/components/sidebar'
import Background from '@/components/background'
import HeadPadrao from '@/components/headPadrao'



export default function Home() {
  const router = useRouter();
  return (
    <div>
      <HeadPadrao>Home</HeadPadrao>
      <Background>
        
      </Background>

    </div>
  )
}

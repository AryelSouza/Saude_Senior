import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import stylesGlobal from '@/styles/Global.module.css'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import SideBar from '@/components/sidebar'



export default function Home() {
  const router = useRouter();
  return (
      <div className={stylesGlobal.main}>

        <div className={stylesGlobal.content}>
          <SideBar/>
          <div className={stylesGlobal.home}>
            
          </div>

        </div>
        <div className={stylesGlobal.footer}>
          <img src='/logos.svg'></img>
          <p className={stylesGlobal.textFooter}>© Copyright NOME PRA DEFINIR. Todos os direitos reservados.</p>
        </div>

      </div>
  )
}

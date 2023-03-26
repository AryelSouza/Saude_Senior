import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import stylesGlobal from '@/styles/Global.module.css'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'



export default function Home() {
  const router = useRouter();
  return (
      <div className={stylesGlobal.main}>

        <div className={stylesGlobal.content}>
          <div className={stylesGlobal.barraLateral}>
            
            <div className={stylesGlobal.logo}>

            </div>

            <div className={stylesGlobal.options}>
              <img className={stylesGlobal.option} src='/home.svg'></img>
              <img className={stylesGlobal.option} src='/video.svg'></img>
              <img className={stylesGlobal.option} src='/map.svg'></img>
              <img className={stylesGlobal.option} src='/moon.svg'></img>
              <img className={stylesGlobal.option} onClick={()=>{router.push('/reportar')}} src='/flag.svg'></img>
            </div>

            <div className={stylesGlobal.info}>
              <img className={stylesGlobal.option} src='/info.svg'></img>
            </div>
          </div>
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

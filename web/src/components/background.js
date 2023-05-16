import { Inter } from 'next/font/google'
import stylesGlobal from '@/styles/Global.module.css'
const inter = Inter({ subsets: ['latin'] })
import SideBar from '@/components/sidebar'



export default function Background({children, pagAtual}) {
  return (
      <div className={stylesGlobal.main}>

        <div className={stylesGlobal.content}>
          <SideBar pagAtual={pagAtual}/>
          <div className={stylesGlobal.home}>
            {children}
          </div>

        </div>
        <div className={stylesGlobal.footer}>
          <img src='/logos.svg'></img>
          <p className={stylesGlobal.textFooter} >•</p>
          <p className={stylesGlobal.textFooter}> © Copyright Saude Senior. Todos os direitos reservados.</p>
        </div>

      </div>
  )
}

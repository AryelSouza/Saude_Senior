import { Inter } from 'next/font/google'
import stylesGlobal from '@/styles/Global.module.css'
const inter = Inter({ subsets: ['latin'] })
import SideBar from '@/components/sidebar'



export default function Background({children}) {
  return (
      <div className={stylesGlobal.main}>

        <div className={stylesGlobal.content}>
          <SideBar/>
          <div className={stylesGlobal.home}>
            {children}
          </div>

        </div>
        <div className={stylesGlobal.footer}>
          <img src='/logos.svg'></img>
          <p className={stylesGlobal.textFooter}>© Copyright NOME PRA DEFINIR. Todos os direitos reservados.</p>
        </div>

      </div>
  )
}

import { Inter } from 'next/font/google'
import stylesGlobal from '@/styles/Global.module.css'
const inter = Inter({ subsets: ['latin'] })
import SideBar from '@/components/sidebar'
import Image from 'next/image'



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
          <div className={stylesGlobal.logos}>
            <Image className={stylesGlobal.logoFooter} src={'logos/cnpq.svg'} width={50} height={50} />
            <Image className={stylesGlobal.logoFooter} src={'logos/ifpb.svg'} width={50} height={50} />
            <Image className={stylesGlobal.logoFooter} src={'logos/uepb.svg'} width={50} height={50} />
            <Image className={stylesGlobal.logoFooter} src={'logos/pet.svg'} width={50} height={50} />
            <Image className={stylesGlobal.logoFooter} src={'logos/secs.svg'} width={100} height={50} />
          </div>
          <p className={stylesGlobal.textFooter} >•</p>
          <p className={stylesGlobal.textFooter}> © Copyright Saude Senior. Todos os direitos reservados.</p>
        </div>

      </div>
  )
}

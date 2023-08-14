import stylesGlobal from '@/styles/Global.module.css'
import {useRouter} from 'next/router'
import { useMyContext } from '@/contexts/flagSideBar'

export default function SideBar({pagAtual}){
  const router = useRouter();
  const {sidebar, setSidebar} = useMyContext();

  return(
      <div style={sidebar ? {width: "300px"} : {}} onMouseEnter={()=>{setSidebar(true);}} onMouseLeave={()=>{setSidebar(false)}} className={stylesGlobal.barraLateral}>
          
          <div className={stylesGlobal.divLogo}>
            <img className={stylesGlobal.logo}src='/logo.svg'></img>
          </div>
          
          <div className={stylesGlobal.options}>

            <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/')}}>
              <img className={stylesGlobal.option} src='/home.svg'></img>
              {
              sidebar
                ? <h2 className={stylesGlobal.tituloSidebar}>Inicio</h2>
                : null
              }
            </div>

            <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/capacitacao')}}>
              <img className={stylesGlobal.option} src='/video.svg'></img>
              {
                sidebar
                  ? <h2 className={stylesGlobal.tituloSidebar}>Capacitação</h2>
                  : null
              }
            </div>
            
            <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/maps')}}>
              <img className={stylesGlobal.option} src='/map.svg'></img>
              {
                sidebar
                  ? <h2 className={stylesGlobal.tituloSidebar}>Direcionando</h2>
                  : null
              }
            </div>

            <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/duvidas')}}>
              <img className={stylesGlobal.option} src='/question.svg'></img>
              {
                sidebar
                  ? <h2 className={stylesGlobal.tituloSidebar}>Dúvidas</h2>
                  : null
              }
            </div>
          </div>

          <div className={stylesGlobal.info}>
            <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/info')}} >
              <img className={stylesGlobal.option} src='/info.svg'></img>
              {
                sidebar
                  ? <h2 className={stylesGlobal.tituloSidebar}>Equipe</h2>
                  : null
              }
            </div>
          </div>
      </div>
  )
}

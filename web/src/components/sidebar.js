import stylesGlobal from '@/styles/Global.module.css'
import {useRouter} from 'next/router'
import { useMyContext } from '@/contexts/flagSideBar'
import {AiOutlineQuestionCircle} from "react-icons/ai" //duvidas
import {RiTeamFill} from "react-icons/ri" //equipe
import {AiOutlineHome} from "react-icons/ai"//home
import {LiaMapSolid} from "react-icons/lia"//map
import {MdSlowMotionVideo} from "react-icons/md"

export default function SideBar({pagAtual}){
  const {sidebar, setSidebar} = useMyContext();
  const router = useRouter();

  return(
      <div style={sidebar ? {width: "300px"} : {}} onMouseEnter={()=>{setSidebar(true);}} onMouseLeave={()=>{setSidebar(false)}} className={stylesGlobal.barraLateral}>
          
          <div className={stylesGlobal.divLogo}>
            <img className={stylesGlobal.logo}src='/logo.svg'></img>
          </div>
          
          <div className={stylesGlobal.options}>

            <div className={sidebar ? stylesGlobal.divSidebarOpen  : stylesGlobal.divSidebar} onClick={()=>{router.push('/')}}>
              <AiOutlineHome size={36} color='#fff'/>
              {
              sidebar
                ? <h2 className={stylesGlobal.tituloSidebar}>Inicio</h2>
                : null
              }
            </div>

            <div className={sidebar ? stylesGlobal.divSidebarOpen  : stylesGlobal.divSidebar} onClick={()=>{router.push('/capacitacao')}}>
              <MdSlowMotionVideo size={36} color='#fff'/>
              {
                sidebar
                  ? <h2 className={stylesGlobal.tituloSidebar}>Capacitação</h2>
                  : null
              }
            </div>
            
            <div className={sidebar ? stylesGlobal.divSidebarOpen  : stylesGlobal.divSidebar} onClick={()=>{router.push('/maps')}}>
            <LiaMapSolid size={36} color='#fff'/>
              {
                sidebar
                  ? <h2 className={stylesGlobal.tituloSidebar}>Direcionando</h2>
                  : null
              }
            </div>

            <div className={sidebar ? stylesGlobal.divSidebarOpen  : stylesGlobal.divSidebar} onClick={()=>{router.push('/duvidas')}}>
              <AiOutlineQuestionCircle size={36} color='#fff'/>
              {
                sidebar
                  ? <h2 className={stylesGlobal.tituloSidebar}>Dúvidas</h2>
                  : null
              }
            </div>
          </div>

          <div className={stylesGlobal.info}>
            <div className={sidebar ? stylesGlobal.divSidebarOpen  : stylesGlobal.divSidebar} onClick={()=>{router.push('/info')}} >
            <RiTeamFill size={36} color='#fff'/>
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

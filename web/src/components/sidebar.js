import styles from '@/styles/Home.module.css'
import stylesGlobal from '@/styles/Global.module.css'
import {useRouter} from 'next/router'
import { useState } from 'react';

export default function SideBar({pagAtual}){
    const router = useRouter();
    const [sideBar, setSideBar] = useState(false)
    return(
        <div onMouseEnter={()=>{setSideBar(true)}} onMouseLeave={()=>{setSideBar(false)}} className={stylesGlobal.barraLateral}>
            
            <div className={stylesGlobal.divLogo}>
              <img className={stylesGlobal.logo}src='/logo.svg'></img>
            </div>
            
            <div className={stylesGlobal.options}>

              <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/')}}  >
                <img className={stylesGlobal.option} src='/home.svg'></img>
                {
                sideBar
                  ? <h2 className={stylesGlobal.tituloSidebar}>Inicio</h2>
                  : null
                }
              </div>

              <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/capacitacao')}}>
                <img className={stylesGlobal.option} src='/video.svg'></img>
                {
                  sideBar
                    ? <h2 className={stylesGlobal.tituloSidebar}>Capacitação</h2>
                    : null
                }
              </div>
              <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/maps')}}>
                <img className={stylesGlobal.option} src='/map.svg'></img>
                {
                  sideBar
                    ? <h2 className={stylesGlobal.tituloSidebar}>Mapa</h2>
                    : null
                }
              </div>

              <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/reportar')}}>
                <img className={stylesGlobal.option} src='/flag.svg'></img>
                {
                  sideBar
                    ? <h2 className={stylesGlobal.tituloSidebar}>Reportar</h2>
                    : null
                }
              </div>
            </div>

            <div className={stylesGlobal.info}>
              <div className={stylesGlobal.divSidebar} onClick={()=>{router.push('/info')}} >
                <img className={stylesGlobal.option} src='/info.svg'></img>
                {
                  sideBar
                    ? <h2 className={stylesGlobal.tituloSidebar}>Informações</h2>
                    : null
                }
              </div>
            </div>
        </div>
    )
}
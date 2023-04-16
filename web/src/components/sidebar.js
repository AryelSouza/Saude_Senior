import styles from '@/styles/Home.module.css'
import stylesGlobal from '@/styles/Global.module.css'
import {useRouter} from 'next/router'

export default function SideBar(){
    const router = useRouter();
    return(
        <div className={stylesGlobal.barraLateral}>
            
            <div className={stylesGlobal.logo}>

            </div>

            <div className={stylesGlobal.options}>
              <img className={stylesGlobal.option} onClick={()=>{router.push('/')}}  src='/home.svg'></img>
              <img className={stylesGlobal.option} src='/video.svg'></img>
              <img className={stylesGlobal.option} src='/map.svg'></img>
              <img className={stylesGlobal.option} src='/moon.svg'></img>
              <img className={stylesGlobal.option} onClick={()=>{router.push('/reportar')}} src='/flag.svg'></img>
            </div>

            <div className={stylesGlobal.info}>
              <img className={stylesGlobal.option} src='/info.svg'></img>
            </div>
        </div>
    )
}
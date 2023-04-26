import styles from '@/styles/barraPesquisa.module.css'
import {BiSearchAlt2} from "react-icons/bi"

export default function BarraPesquisa(){
    return(
        <div className={styles.ReportPesquisa}>
            <input type="text" className={styles.ReportBusca} placeholder="Buscar..."/>
            <BiSearchAlt2 color='#00000035' className={styles.icon}/>
        </div>
    )
}
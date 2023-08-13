import styles from '@/styles/Duvidas.module.css'

export default function Button({children, click}){
    return(
        <button className={styles.ReportButton} onClick={click}>
            {children}
        
        </button>
    )
}
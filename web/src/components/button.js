import styles from '@/styles/Report.module.css'

export default function Button({children, click}){
    return(
        <button className={styles.ReportButton} onClick={click}>
            {children}
        
        </button>
    )
}
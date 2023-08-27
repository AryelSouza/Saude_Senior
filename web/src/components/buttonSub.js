import styles from '@/styles/Duvidas.module.css'
import Link from 'next/link';

export default function ButtonSubmit({children, click}){
    return(
    <div className={styles.ReportLink}>
        <button type='submit' className={styles.ReportButton} onClick={click}>
            {children}
        </button>
    </div>
    )
}
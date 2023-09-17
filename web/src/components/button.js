import styles from '@/styles/Feedback.module.css'
import Link from 'next/link';

export default function Button({children, click, link}){
    return(
    <Link className={styles.ReportLink} href={link ? link : "/capacitacao"}>
        <button className={styles.ReportButton} onClick={click}>
            {children}
        </button>
    </Link>
    )
}
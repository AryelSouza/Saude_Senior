import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Report.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.main}>

        <div className={styles.content}>
          <div className={styles.barraLateral}>
            
          </div>
          <div className={styles.home}>
            <div className={styles.ReportPesquisa}>
              <input type="text" className={styles.ReportBusca} placeholder="Buscar..."/>
              
            </div>
            <div className={styles.ReportFrequency}>
              <div className={styles.ReportBalon}>teste</div>
              <div className={styles.ReportBalon}></div>
              <div className={styles.ReportBalon}></div>
              <div className={styles.ReportBalon}>teste</div>
              <div className={styles.ReportBalon}></div>
              <div className={styles.ReportBalon}></div>
              <div className={styles.ReportBalon}>teste</div>
              <div className={styles.ReportBalon}></div>
              <div className={styles.ReportBalon}></div>
              
            </div>
            <div className={styles.ReportProblem}>
              <textarea></textarea>

            </div>
          </div>

        </div>
        <div className={styles.footer}>


        </div>

      </div>
    </div>
  )
}

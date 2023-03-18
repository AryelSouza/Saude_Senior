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
            <div className={styles.ReportQuestions}>
                <h6 className={styles.ReportText}>Qual o Problema encontrado ?</h6>
                <div className={styles.ReportFrequency}>
                <div className={styles.ReportBalon}>Eduardo</div>
                <div className={styles.ReportBalon}>Lipe</div>
                <div className={styles.ReportBalon}>Aryel</div>
                <div className={styles.ReportBalon}>Daniel</div>
                <div className={styles.ReportBalon}>Alessandro</div>
                <div className={styles.ReportBalon}>Livia</div>
                <div className={styles.ReportBalon}>Leticia</div>
                <div className={styles.ReportBalon}></div>
                <div className={styles.ReportBalon}></div>
                
                </div>
            </div>
           
            <div className={styles.ReportProblem}>
            <h6>Qual o Problema encontrado ?</h6>
            <textarea rows="6"cols="60" className={styles.ReportTextProblem}></textarea>

            <button className={styles.ReportButton}>Enviar</button>
            </div>
          </div>

        </div>
        <div className={styles.footer}>


        </div>

      </div>
    </div>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Report.module.css'
import stylesGlobal from '@/styles/Global.module.css'
import {useRouter} from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
      <div className={stylesGlobal.main}>

        <div className={stylesGlobal.content}>
        <div className={stylesGlobal.barraLateral}>
            
            <div className={stylesGlobal.logo}>

            </div>

            <div className={stylesGlobal.options}>
              <img className={stylesGlobal.option} src='/home.svg' onClick={()=>{router.push('/')}}></img>
              <img className={stylesGlobal.option} src='/video.svg'></img>
              <img className={stylesGlobal.option} src='/map.svg'></img>
              <img className={stylesGlobal.option} src='/moon.svg'></img>
              <img className={stylesGlobal.option} src='/flag.svg' width={30} height={30}></img>
            </div>

            <div className={stylesGlobal.info}>
              <img className={stylesGlobal.option} src='/info.svg'></img>
            </div>
          </div>
          <div className={stylesGlobal.home}>
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
        <div className={stylesGlobal.footer}>
          <img src='/logos.svg'></img>
          <p className={stylesGlobal.textFooter}>© Copyright NOME PRA DEFINIR. Todos os direitos reservados.</p>
        </div>

      </div>
  )
}

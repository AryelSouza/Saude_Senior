import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Report.module.css'
import stylesGlobal from '@/styles/Global.module.css'
import {useRouter} from 'next/router'
import axios from 'axios'
import SideBar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
      <div className={stylesGlobal.main}>

        <div className={stylesGlobal.content}>
        <SideBar/>
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

            <button className={styles.ReportButton} onClick={()=>{
              axios.get('http://localhost:3000/teste').then((resposta)=>{
                alert(resposta.data)
                console.log(resposta.data)
              }).catch((err)=>{
                alert(err.message)
                console.log(err)
              })
            }}>Enviar</button>
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

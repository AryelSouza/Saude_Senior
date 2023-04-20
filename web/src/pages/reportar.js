import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Report.module.css'
import stylesGlobal from '@/styles/Global.module.css'
import {useRouter} from 'next/router'
import axios from 'axios'
import SideBar from '@/components/sidebar'
import Background from '@/components/background'
import Button from '@/components/button'
import {BiSearchAlt2} from "react-icons/bi"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
      <Background>
        <div className={styles.all}>
            <div className={styles.ReportPesquisa}>
              <input type="text" className={styles.ReportBusca} placeholder="Buscar..."/>
              <BiSearchAlt2 color='#00000035' className={styles.icon}/>
              
            </div>
            <div className={styles.ReportQuestions}>
                <div className={styles.title}>
                  <h3 className={styles.ReportText}>Perguntas mais frequentes:</h3>
                </div>
                <div className={styles.Problems}>
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
            </div>

            <div className={styles.ReportProblem}>
            <h3>Qual o Problema encontrado ?</h3>
            <textarea rows="6"cols="60" className={styles.ReportTextProblem}></textarea>

            <Button click={()=>{
              axios.get('http://localhost:3000/teste').then((resposta)=>{
                alert(resposta.data)
                console.log(resposta.data)
              }).catch((err)=>{
                alert(err.message)
                console.log(err)
              })
            }}>
              Enviar
            </Button>
          </div>
        </div>
      </Background>
  )
}

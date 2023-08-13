import { Inter } from 'next/font/google'
import styles from '@/styles/Duvidas.module.css'
import {useRouter} from 'next/router'
import axios from 'axios'
import Background from '@/components/background'
import Button from '@/components/button'
import HeadPadrao from '@/components/headPadrao'

const inter = Inter({ subsets: ['latin'] })

export default function Reportar() {
  const router = useRouter();
  return (
    <div>
      <HeadPadrao>Reportar</HeadPadrao>

      <Background>
        <div className={styles.all}>
            <div className={styles.ReportQuestions}>
                <div className={styles.title}>
                  <h3 className={styles.ReportText}>Perguntas mais frequentes:</h3>
                </div>
                <div className={styles.Problems}>
                  <div className={styles.ReportFrequency}>
                    <div className={styles.ReportBalon}>Este é um exemplo de pergunta?</div>
                    <div className={styles.ReportBalon}>Como podemos melhorar?</div>
                    <div className={styles.ReportBalon}>Qual equipe fez isso?</div>
                  </div>
                
                </div>
            </div>

            <div className={styles.ReportProblem}>
            <h3 style={{textAlign:'center'}}>Alguma outra duvida? <br/> Entre em contato conosco!</h3>
            <div>
              <label>Email:</label>
              <input></input>
            </div>
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
    </div>
  )
}

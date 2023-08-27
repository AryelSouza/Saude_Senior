import { Inter } from 'next/font/google'
import styles from '@/styles/Duvidas.module.css'
import {useRouter} from 'next/router'
import axios from 'axios'
import { useForm } from "react-hook-form"
import Background from '@/components/background'
import Button from '@/components/button'
import HeadPadrao from '@/components/headPadrao'
import ButtonSubmit from '@/components/buttonSub'

const inter = Inter({ subsets: ['latin'] })

export default function Reportar() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

          <form onSubmit={handleSubmit((data)=>{
            axios.post("https://api-gilt-zeta.vercel.app/duvida",
              {
                "email": data.email,
                "text": data.text
              }
            )
            alert("Obrigado! Em breve te retornaremos por meio do email informado")
            location.reload()
          })} className={styles.ReportProblem}>
            <h3 style={{textAlign:'center'}}>Alguma outra duvida? Entre em contato conosco!</h3>
            <div className={styles.inputs}>
              <textarea {...register("text")} rows="6"cols="60" className={styles.ReportTextProblem}></textarea>
              <div className={styles.contato}>
                <label>Email para contato:</label>
                <input {...register("email")}  className={styles.ReportTextProblem}></input>
              </div>
            </div>

            <ButtonSubmit>
              Enviar
            </ButtonSubmit>
          </form>
        </div>
      </Background>
    </div>
  )
}

import { Inter } from 'next/font/google'
import styles from '@/styles/Feedback.module.css'
import {useRouter} from 'next/router'
import axios from 'axios'
import { useForm } from "react-hook-form"
import Background from '@/components/background'
import HeadPadrao from '@/components/headPadrao'
import ButtonSubmit from '@/components/buttonSub'
import StarRating from "@/components/StarRating";
import { useState } from "react";



const inter = Inter({ subsets: ['latin'] })
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Feedback() {
  const [nStars, setNStars] = useState(0);
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
        <div style={customStyles}>
          <form onSubmit={handleSubmit((data)=>{
            axios.post("https://api-gilt-zeta.vercel.app/avaliacao",{
              "nStars": nStars,
              "text": `${data.text}`
            })
            closeModal();
            alert("Obrigado pelo feedback!");
          })} className={styles.form}>
            <h2>O que está achando da nossa plataforma?</h2>

            <StarRating setNstars={setNStars}/>
            <textarea
              rows={5}
              cols={50}
              className={styles.textarea}
              {...register("text")}
            ></textarea>

            <ButtonSubmit>Enviar</ButtonSubmit>
          </form>
        </div>
      </Background>
    </div>
  )
}

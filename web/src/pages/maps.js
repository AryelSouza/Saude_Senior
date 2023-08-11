import styles from '@/styles/Capacitacao.module.css'
import { useRouter } from 'next/router'
import Background from '@/components/background'
import HeadPadrao from '@/components/headPadrao'
import BarraPesquisa from '@/components/barraPesquisa'
import data from "@/json-saudesenior.json"
import { useEffect } from 'react'


export default function Home() {

  const router = useRouter();
  const styleBg = {
    backgroundImage: `url("/big.png")`,
    /* outras propriedades de estilo */
  };

  

  return (
    <>
      <HeadPadrao>Home</HeadPadrao>
      <Background>
        <div className={styles.all}>
            <BarraPesquisa/>
            {
              data.map((element)=>
                <div key={element.nome}>
                  <p>Nome: {element.nome}</p>
                  Endereço: {element.endereco}
                </div>
              )
            }
        </div>
      </Background>
    </>
  )
}

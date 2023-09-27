import React, { useState } from 'react'
import WordSearch from './WordSearch'
import styles from '@/styles/CacaPalavras.module.css'
import { useForm } from "react-hook-form"
import ButtonSubmit from './buttonSub'
import Button from './button'

function encontrarIntersecao(array1, array2) {
  return array1.filter(elemento => array2.includes(elemento));
}

export default function CacaPalavras ({setFase}) {
  const words = ["vida", "saude", "alimentacao", "educacao", "cultura", "esporte", "lazer", "trabalho", "cidadania", "habitacao", "transporte", "liberdade", "dignidade", "respeito", "convivencia"]
  const [wordsTest, setWordsTest] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    encontrarIntersecao(words,wordsTest).length === 15
    ?
    <div className={styles.fieldCenter}>
      <h1>Parabens! Você concluiu a segunda fase!</h1>
      <div className={styles.botao}>
        <Button click={()=>setFase(3.1)}>
          Proxima Fase
        </Button>
      </div>
    </div>
    :
    <div className={styles.container}>
      <div className={styles.field}>
        <p style={{color:"gray", textAlign:"center"}}>SUBMETA PALAVRAS SEM ACENTUAÇÃO (Ç,´,~,^)</p>
        <div style={{width:"100%", textAlign:"center"}}>
          {encontrarIntersecao(words,wordsTest).length}/15
        </div>
        <form onSubmit={handleSubmit((data)=>{
          setWordsTest(prev => [...prev, data.word.toLowerCase()])
        })}>
          <label className={styles.input}>
            <input {...register("word")} type='text' className={styles.textarea} placeholder='Escreva as palavras que você encontrar aqui!'/>
          </label>
          <ButtonSubmit>
            Submeter
          </ButtonSubmit>
        </form>
      </div>
      <WordSearch
        arrayTest={wordsTest}
        debug={false}
      />
    </div>
  )
}
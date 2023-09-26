import React, { useState } from 'react'
import WordSearch from './WordSearch'
import styles from '@/styles/CacaPalavras.module.css'
import Button from './button'


export default function CacaPalavras () {
  const [ state, setState ] = useState({
    highlightWords: false
  })

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <div className={styles.input}>
          <label className={styles.checkbox}>
            <input
              type='checkbox'
              checked={state.highlightWords}
              onChange={() => setState({ ...state, highlightWords: !state.highlightWords })}
            />
            <span>Destacar as palavras</span>
          </label>
        </div>
        <label className={styles.input}>
          <textarea className={styles.textarea} placeholder='Escreva as palavras que você encontrar aqui!'/>
        </label>
        <Button click={testarPalavra()}>
          Submeter
        </Button>
      </div>
      <WordSearch
        highlightWords={state.highlightWords}
        debug={false}
      />
    </div>
  )
}
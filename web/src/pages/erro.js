import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/erro.module.css'
import stylesGlobal from '@/styles/Global.module.css'
import {useRouter} from 'next/router'
import axios from 'axios'
import SideBar from '@/components/sidebar'
import Background from '@/components/background'
import Button from '@/components/button'
import HeadPadrao from '@/components/headPadrao'
import BarraPesquisa from '@/components/barraPesquisa'

const inter = Inter({ subsets: ['latin'] })

export default function Reportar() {
  const router = useRouter();
  return (
    <>
    <Background>
      <div className={styles.body}>
        <div className="container">
          <div className="row">
            <div className="texto">
              <h1>O link não possui correspondência ;-;</h1>
              <p className={styles.animatedText}>
                Lamentamos o ocorrido, estamos trabalhando nisso!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Background>
    </>
  )
}

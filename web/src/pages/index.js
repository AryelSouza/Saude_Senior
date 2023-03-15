import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.main}>

        <div className={styles.content}>
          <div className={styles.barraLateral}>

          </div>
          <div className={styles.home}>
            
          </div>

        </div>
        <div className={styles.footer}>


        </div>

      </div>
    </div>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import stylesGlobal from '@/styles/Global.module.css'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import SideBar from '@/components/sidebar'
import Background from '@/components/background'
import HeadPadrao from '@/components/headPadrao'
import BarraPesquisa from '@/components/barraPesquisa'


export default function Home() {
  const router = useRouter();
  return (
    <>
      <HeadPadrao>Info</HeadPadrao>
      <Background>
        <div className={styles.all}>
          <BarraPesquisa></BarraPesquisa>
        </div>
      </Background>
    </>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import stylesGlobal from '@/styles/Global.module.css'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import SideBar from '@/components/sidebar'
import Background from '@/components/background'
import HeadPadrao from '@/components/headPadrao'
import BarraPesquisa from '@/components/barraPesquisa'
import styles from "@/styles/Info.module.css"
import Perfil from "@/components/perfilInfo.js"

/* componente responsável pela página info */
export default function Info() {
  const router = useRouter();
  return (
    <>
      <HeadPadrao>Info</HeadPadrao>
      <Background>
        <div className={styles.all}>
          <div className={styles.perfis}>
            <Perfil/>
            <Perfil/>
            <Perfil/>
            <Perfil/>
          </div>
          <div className={styles.perfis}>
            <Perfil/>
            <Perfil/>
            <Perfil/>
            <Perfil/>
          </div>
        </div>
      </Background>
    </>
  )
}

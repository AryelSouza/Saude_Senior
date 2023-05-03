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
import Apresentacao from '@/components/apresentacao'


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
          <BarraPesquisa></BarraPesquisa>
        </div>

        <div className={styles.contain} style={styleBg}></div>

        <div className={styles.apresentacoes}>

          <Apresentacao src={"/capacita.png"} />
          <Apresentacao src={"/sobrenos.png"} />
          <Apresentacao src={"/feedback.png"} />
          <Apresentacao src={"/explica.png"} />
        </div>
      </Background>
    </>
  )
}

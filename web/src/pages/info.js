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

  const Perfil = ({ imageUrl, username, profileInfo }) => {
    return (
      <div className={styles.perfil}>
        <div className={styles.detail}>
          {/* Add your image here */}
          <img src={imageUrl} alt="Profile Picture" className={styles.profileImg} />
        </div>
        {/* Display other profile details here */}
        <h2>{username}</h2>
        <p>{profileInfo}</p>
      </div>
    );
  };

  return (
    <>
      <HeadPadrao>Info</HeadPadrao>
      <Background>
        <div className={styles.all}>
          <div className={styles.perfis}>
            {/* Use the Perfil component with the image */}
            <Perfil
              imageUrl="/lipe.png" // Replace with the actual path to your image
              username="Luis felipe" // Replace with the username
              profileInfo="Estudante de Enhenharia da Computação" // Replace with the profile information
            />
            <Perfil
              imageUrl="/Daniel.png"
              username="Daniel Vasconcelos"// Replace with the actual path to your image
              profileInfo="Estudante de Enhenharia da Computação" // Replace with the profile information
            />
            <Perfil
              imageUrl="/Alessandro.jpeg" // Replace with the actual path to your image
              username="Alessandro" // Replace with the username
              profileInfo="Estudante de Enhenharia da Computação" // Replace with the profile information
            />
            {/* Add other profile cards here */}
          </div>
          <div className={styles.perfis}>
            {/* Add more profile cards here */}
            <Perfil
              imageUrl="/Eduardo.jpeg" // Replace with the actual path to your image
              username="Eduardo" // Replace with the username
              profileInfo="Estudante de Enhenharia da Computação" // Replace with the profile information
            />
            <Perfil
              imageUrl="/Aryel.jpeg" // Replace with the actual path to your image
              username="Aryel" // Replace with the username
              profileInfo="Estudante de Enhenharia da Computação" // Replace with the profile information
            />
            <Perfil/>
          </div>
        </div>
      </Background>
    </>
  );
}
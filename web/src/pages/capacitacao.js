import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Capacitacao.module.css';
import stylesGlobal from '@/styles/Global.module.css';
const inter = Inter({ subsets: ['latin'] });
import { useRouter } from 'next/router';
import SideBar from '@/components/sidebar';
import Background from '@/components/background';
import HeadPadrao from '@/components/headPadrao';
import BarraPesquisa from '@/components/barraPesquisa';
import Apresentacao from '@/components/apresentacao';
import { useState } from 'react';


export default function Home() {
  const router = useRouter();
  const [mostrarVideos, setMostrarVideos] = useState(false);
  const [mostrarDocumentos, setMostrarDocumentos] = useState(false);
  const [mostrarMapasMentais, setMostrarMapasMentais] = useState(false);

  const toggleMostrarVideos = () => {
    setMostrarVideos(!mostrarVideos);
    setMostrarDocumentos(false); // Certifique-se de desativar a exibição de documentos ao clicar no botão de vídeos
    setMostrarMapasMentais(false); // Certifique-se de desativar a exibição de mapas mentais ao clicar no botão de vídeos
  };

  const toggleMostrarDocumentos = () => {
    setMostrarDocumentos(!mostrarDocumentos);
    setMostrarVideos(false); // Certifique-se de desativar a exibição de vídeos ao clicar no botão de documentos
    setMostrarMapasMentais(false); // Certifique-se de desativar a exibição de mapas mentais ao clicar no botão de documentos
  };

  const toggleMostrarMapasMentais = () => {
    setMostrarMapasMentais(!mostrarMapasMentais);
    setMostrarVideos(false); // Certifique-se de desativar a exibição de vídeos ao clicar no botão de mapas mentais
    setMostrarDocumentos(false); // Certifique-se de desativar a exibição de documentos ao clicar no botão de mapas mentais
  };

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
          <div className={styles.options}>
            <div className={styles.option} onClick={toggleMostrarVideos}>
              Videos
            </div>
            <div className={styles.option} onClick={toggleMostrarDocumentos}>
              Documentos
            </div>
            <div className={styles.option} onClick={toggleMostrarMapasMentais}>
              Mapas Mentais
            </div>
          </div>

          {mostrarVideos && (
            <div className={styles.videos}>
              {/* Renderizar seus vídeos aqui */}
              {/* Exemplo de vídeo: */}
              <div className={styles.videoItem}>
                <iframe
                  width="400"
                  height="200"
                  src="https://www.youtube.com/embed/EDhkxMvpnEE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoItem}>
                <iframe
                  width="400"
                  height="200"
                  src="https://www.youtube.com/embed/2G1Bnwsw7lA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {mostrarDocumentos && (
            <div className={styles.documentos}>
              {/* Renderizar seus documentos aqui */}
            </div>
          )}

          {mostrarMapasMentais && (
            <div className={styles.mapasMentais}>
              {/* Renderizar seus mapas mentais aqui */}
            </div>
          )}
        </div>
      </Background>
    </>
  );
}

import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Capacitacao.module.css";
import stylesGlobal from "@/styles/Global.module.css";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/router";
import SideBar from "@/components/sidebar";
import Background from "@/components/background";
import HeadPadrao from "@/components/headPadrao";
import BarraPesquisa from "@/components/barraPesquisa";
import Apresentacao from "@/components/apresentacao";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [fase, setFase] = useState(1);

  const styleBg = {
    backgroundImage: `url("/big.png")`,
    /* outras propriedades de estilo */
  };

  return (
    <>
      <HeadPadrao>Home</HeadPadrao>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Background>
        <div className={styles.all}>
          <BarraPesquisa></BarraPesquisa>
          <div className={styles.options}>
            <div
              className={styles.option}
              style={{
                backgroundColor:
                  fase == 1 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
              }}
              onClick={() => setFase(1)}
            >
              Fase 1
            </div>
            <div
              className={styles.option}
              style={{
                backgroundColor:
                  fase == 2 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
              }}
              onClick={() => setFase(2)}
            >
              Fase 2
            </div>
            <div
              className={styles.option}
              style={{
                backgroundColor:
                  fase == 3 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
              }}
              onClick={() => setFase(3)}
            >
              Fase 3
            </div>
          </div>

          {fase == 1 && (
            <div className={styles.videos}>
              {/* Renderizar seus vídeos aqui */}
              {/* Exemplo de vídeo: */}

              <div className={styles.videoItem}>
                <iframe
                  //width="400"
                  //height="200"
                  src="https://www.youtube.com/embed/EDhkxMvpnEE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoItem}>
                <iframe
                  //width="400"
                  //height="200"
                  src="https://www.youtube.com/embed/2G1Bnwsw7lA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoItem}>
                <iframe
                  //width="560"
                  //height="315"
                  src="https://www.youtube.com/embed/MGWOw9IEHco"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={styles.videoItem}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_u8qTN3cCnQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}

          {fase == 2 && (
            <div className={styles.documentos}>
              DOCUMENTOS
              {/* Renderizar seus documentos aqui */}
            </div>
          )}

          {fase == 3 && (
            <div className={styles.mapasMentais}>
              MAPAS
              {/* Renderizar seus mapas mentais aqui */}
            </div>
          )}
        </div>
      </Background>
    </>
  );
}

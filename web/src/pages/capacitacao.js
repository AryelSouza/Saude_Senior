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
import Button from "@/components/button";

export default function Home() {
  const router = useRouter();
  const [fase, setFase] = useState(1);

  return (
    <>
      <HeadPadrao>Home</HeadPadrao>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Background>
        <div className={styles.all}>
          <div className={styles.options}>
          <div
              className={styles.option}
              style={{
                backgroundColor:
                  fase == 0 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
              }}
              onClick={() => setFase(0)}
            >
              Introdução
            </div>
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
            <div
              className={styles.option}
              style={{
                backgroundColor:
                  fase == 4 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
              }}
              onClick={() => setFase(4)}
            >
              Fase 4
            </div>
            <div
              className={styles.option}
              style={{
                backgroundColor:
                  fase == 5 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
              }}
              onClick={() => setFase(5)}
            >
              Fase 5
            </div>
            <div
              className={styles.option}
              style={{
                backgroundColor:
                  fase == 6 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
              }}
              onClick={() => setFase(6)}
            >
              Finalização
            </div>
          </div>

          {fase == 1 && (
            <div className={styles.fase}>
              {/* Renderizar seus vídeos aqui */}
              {/* Exemplo de vídeo: */}

              <div className={styles.videoItem}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/SMBPnXK-VKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <Button>Baixar</Button>
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

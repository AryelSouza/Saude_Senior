import styles from "@/styles/Capacitacao.module.css";
import { useRouter } from "next/router";
import Background from "@/components/background";
import HeadPadrao from "@/components/headPadrao";
import { useState } from "react";
import Button from "@/components/button";

export default function Capacitacao() {
  const [fase, setFase] = useState(1);
  const router = useRouter()

  return (
    <>
      <HeadPadrao>Capacitacao</HeadPadrao>
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
                <h2>• Video 1</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SMBPnXK-VKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <h2>• Video 2</h2>
                <iframe width="708" height="398" src="https://www.youtube.com/embed/FXTGgP9k3z0" title="Políticas de Saúde Voltadas À Pessoa Idosa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <h2>• Video 3</h2>
                <iframe width="708" height="398" src="https://www.youtube.com/embed/3xC5jgL1VOo" title="Humanização, Acolhimento e Comunicação com a Pessoa Idosa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <Button link={"https://drive.google.com/drive/u/2/folders/1bLeXxaT_apaiZIP-EjpdQtyZHGV7AtlV"}>Baixar material complementar</Button>
            </div>
          )}

          {fase == 2 && (
            <div className={styles.fase}>
            {/* Renderizar seus vídeos aqui */}
            {/* Exemplo de vídeo: */}

            <div className={styles.videoItem}>
              <iframe width="708" height="398" src="https://www.youtube.com/embed/CjjHqMp3f7Q" title="Estatuto da Pessoa Idosa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <Button>Baixar material complementar</Button>
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

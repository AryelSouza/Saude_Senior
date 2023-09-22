import styles from "@/styles/Capacitacao.module.css";
import Background from "@/components/background";
import HeadPadrao from "@/components/headPadrao";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Quiz from "@/components/quiz";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1, // define quantos slides serão exibidos por vez
  slidesToScroll: 1, // define quantos slides serão percorridos por vez,
};

export default function Capacitacao() {
  const [fase, setFase] = useState(0);
  
  
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
                  fase == 1.1 || fase == 1.2 || fase == 1.3 || fase == 1.4 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
              }}
              onClick={() => setFase(1.1)}
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
                  fase == 3.1 || fase == 3.2 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
              }}
              onClick={() => setFase(3.1)}
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
              Projetos
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
          <div className={styles.fases}>


          {fase == 0 && (
            <div className={styles.fase}>
                <div className={styles.contain}>
                    <Slider {...settings} className={styles.images}>
                        <Image className={styles.image} src={"cap11.svg"} width={700} height={700} />
                        <Image className={styles.image} src={"cap12.svg"} width={700} height={700} />
                        <Image className={styles.image} src={"cap13.svg"} width={700} height={700} />
                        <Image className={styles.image} src={"cap14.svg"} width={700} height={700} />
                    </Slider>
                    <div className={styles.botoes}>
                      <div className={styles.link}>
                        <button onClick={() => { setFase(1.1) }} className={styles.button}>
                          Proxima Fase
                        </button>
                      </div>
                    </div>
                </div>

            </div>
          )}

          {fase == 1.1 && (
            <div className={styles.fase}>
              {/* Renderizar seus vídeos aqui */}
              {/* Exemplo de vídeo: */}

              <div className={styles.videoItem}>
                <h2>• Video 1</h2>
                <iframe width="560" height="500" src="https://www.youtube.com/embed/SMBPnXK-VKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={styles.botoes}>
                  <div className={styles.link}>
                    <button onClick={() => { setFase(1.2) }} className={styles.button}>
                      Proximo video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {fase == 1.2 && (
            <div className={styles.fase}>
              {/* Renderizar seus vídeos aqui */}
              {/* Exemplo de vídeo: */}
              <div className={styles.videoItem}>
                <h2>• Video 2</h2>
                <iframe width="560" height="398" src="https://www.youtube.com/embed/FXTGgP9k3z0" title="Políticas de Saúde Voltadas À Pessoa Idosa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={styles.botoes}>
                  <div className={styles.link}>
                    <button onClick={() => { setFase(1.3) }} className={styles.button}>
                      Proximo video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}


          {fase == 1.3 && (
            <div className={styles.fase}>
              {/* Renderizar seus vídeos aqui */}
              {/* Exemplo de vídeo: */}
              <div className={styles.videoItem}>
                <h2>• Video 3</h2>
                <iframe width="560" height="398" src="https://www.youtube.com/embed/3xC5jgL1VOo" title="Humanização, Acolhimento e Comunicação com a Pessoa Idosa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={styles.botoes}>
                  <Link className={styles.link} href={"https://drive.google.com/uc?export=download&id=1Q2f80pkvKNTZPOtO98PaCQQ413MrK4R9"}>
                    <button className={styles.button}>
                      Baixar material complementar
                    </button>
                  </Link>
                  <div className={styles.link}>
                    <button onClick={() => { setFase(1.4) }} className={styles.button}>
                      Jogo de Fixação
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {fase == 1.4 && (<Quiz fase={fase} setFase={setFase}/>)}

          {fase == 2 && (
            <div className={styles.fase}>
              <div className={styles.videoItem}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/CjjHqMp3f7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={styles.botoes}>
                  <Link className={styles.link} href={"https://drive.google.com/uc?export=download&id=13ss4BNdOrx-vus9HMhSn5RWpfuNlX2VP"}>
                    <button className={styles.button}>
                      Baixar material complementar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}

              {fase == 3.1 && (
                <div className={styles.fase}>
                  {/* Renderizar seus vídeos aqui */}
                  {/* Exemplo de vídeo: */}

                  <div className={styles.videoItem}>
                    <h2>• Video 1</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/y-ASs2Ej6o8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className={styles.botoes}>
                      <div className={styles.link}>
                        <button onClick={() => { setFase(3.2) }} className={styles.button}>
                          Proximo video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {fase == 3.2 && (
                <div className={styles.fase}>
                  {/* Renderizar seus vídeos aqui */}
                  {/* Exemplo de vídeo: */}
                  <div className={styles.videoItem}>
                    <h2>• Video 2</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/iYToMgC5zVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className={styles.botoes}>
                      <Link className={styles.link} href={"https://drive.google.com/uc?export=download&id=13ss4BNdOrx-vus9HMhSn5RWpfuNlX2VP"}>
                        <button className={styles.button}>
                          Baixar material complementar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {fase == 4 && (
                <div className={styles.fase}>
                  {/* Renderizar seus vídeos aqui */}
                  {/* Exemplo de vídeo: */}
                  <div className={styles.videoItem}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2BOoiaQT63A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className={styles.botoes}>
                      <Link className={styles.link} href={"https://drive.google.com/uc?export=download&id=13ss4BNdOrx-vus9HMhSn5RWpfuNlX2VP"}>
                        <button className={styles.button}>
                          Baixar material complementar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              {fase == 5 && (
                <div className={styles.fase}>
                    <div className={styles.contain}>
                        <Slider {...settings} className={styles.images}>
                            <Image className={styles.image} src={"cap51.svg"} width={700} height={700} />
                            <Image className={styles.image} src={"cap52.svg"} width={700} height={700} />
                            <Image className={styles.image} src={"cap53.svg"} width={700} height={700} />
                            <Image className={styles.image} src={"cap54.svg"} width={700} height={700} />
                            <Image className={styles.image} src={"cap55.svg"} width={700} height={700} />
                            <Image className={styles.image} src={"cap56.svg"} width={700} height={700} />
                            <Image className={styles.image} src={"cap57.svg"} width={700} height={700} />
                            <Image className={styles.image} src={"cap58.svg"} width={700} height={700} />
                            <Image className={styles.image} src={"cap59.svg"} width={700} height={700} />
                        </Slider>
                    </div>

                </div>
              )}
              {fase == 6 && (
                <div className={styles.fase}>
                  {/* Renderizar seus vídeos aqui */}
                  {/* Exemplo de vídeo: */}
                  <div className={styles.videoItem}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CGgVhl6yPSE?si=h4Gj1MtEd6gDIkSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </div>
              )}
          </div>
            </div>
      </Background>
    </>
  );
}

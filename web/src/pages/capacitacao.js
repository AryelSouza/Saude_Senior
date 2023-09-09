import styles from "@/styles/Capacitacao.module.css";
import Background from "@/components/background";
import HeadPadrao from "@/components/headPadrao";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [question, setQuestion] = useState(1)
  const [answer, setAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isAnswerCorrect2, setIsAnswerCorrect2] = useState(null);
  const [isAnswerCorrect3, setIsAnswerCorrect3] = useState(null);
  const [isAnswerCorrect4, setIsAnswerCorrect4] = useState(null);
  const [isAnswerCorrect5, setIsAnswerCorrect5] = useState(null);
  const checkAnswer1 = () => {
    if (answer.toLowerCase() === "c") {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };
  const checkAnswer2 = () => {
    if (answer.toLowerCase() === "a") {
      setIsAnswerCorrect2(true);
    } else {
      setIsAnswerCorrect2(false);
    }
  };
  const checkAnswer3 = () => {
    if (answer.toLowerCase() === "b") {
      setIsAnswerCorrect3(true);
    } else {
      setIsAnswerCorrect3(false);
    }
  };
  const checkAnswer4 = () => {
    if (answer.toLowerCase() === "c") {
      setIsAnswerCorrect4(true);
    } else {
      setIsAnswerCorrect4(false);
    }
  };
  const checkAnswer5 = () => {
    if (answer.toLowerCase() === "d") {
      setIsAnswerCorrect5(true);
    } else {
      setIsAnswerCorrect5(false);
    }
  };

  useEffect(() => {
    setIsAnswerCorrect(null);
  }, [fase]);

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
                  fase == 1.1 || fase == 1.2 || fase == 1.3 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.08)",
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
              </div>
              <div className={styles.link}>
                <button onClick={() => { setFase(1.2) }} className={styles.button}>
                  Proximo video
                </button>
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
              </div>
              <div className={styles.link}>
                <button onClick={() => { setFase(1.3) }} className={styles.button}>
                  Proximo video
                </button>
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
              </div>
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
          )}

          {fase == 1.4 && (
            <div className={styles.fase}>
              {
                question == 1
                  ?
                  <div className={styles.question}>
                    <p className={isAnswerCorrect === true ? 'correct' : 'incorrect'}>
                      {isAnswerCorrect === true && "Muito bem, você assinalou a resposta correta."}
                      {isAnswerCorrect === false && "Resposta correta: Letra C.  Ao longo dessa etapa, em nossa formação, tivemos a oportunidade de conhecer que os dois processos definidos acima e correspondentes à compreensão do envelhecimento condizem com a Senescência e Senilidade. Logo, as demais alternativas estão incorretas."}
                    </p>
                    <p>1) O envelhecimento pode ser compreendido sobre dois processos diferentes.
                      O primeiro é conhecido como o processo natural, onde há diminuição
                      progressiva da reserva funcional dos indivíduos o que, em condições normais,
                      não costuma provocar qualquer problema. Tanto que, certas alterações
                      decorrentes desse processo podem ter seus efeitos minimizados pela
                      assimilação de um estilo de vida mais ativo. Porém, no segundo processo, há
                      associação de condições de sobrecarga como, por exemplo, doenças,
                      acidentes e estresse emocional, podendo ocasionar uma condição patológica
                      que requeira assistência. Essas descrições correspondem, respectivamente,
                      aos processos de:<br />

                    </p>
                    <div className={styles.opsao}>
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question2" value="a" onClick={() => checkAnswer1('a')} className={styles.optionButton} />
                        a) Sequencialidade e Senilidade
                      </label>
                      <br />
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question2" value="b" onClick={() => checkAnswer1('b')} className={styles.optionButton} />
                        b) Universalidade e Irreversibilidade
                      </label>
                      <br />
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question2" value="c" onClick={() => checkAnswer1('c')} className={styles.optionButton} />
                        c) Senescência e Senilidade
                      </label>
                      <br />
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question2" value="d" onClick={() => checkAnswer1('d')} className={styles.optionButton} />
                        d) Irreversibilidade e Senescência
                      </label>
                      <br />
                    </div>
                    <div className={styles.link}>
                      <button onClick={() => { setQuestion(2) }} className={styles.button}>
                        Proxima questão
                      </button>
                    </div>
                  </div>
                  :
                  question == 2
                    ?
                    <div className={styles.question}>
                      <p className={isAnswerCorrect === true ? 'correct' : 'incorrect'}>
                        {isAnswerCorrect2 === true && "Muito bem, você assinalou a resposta correta."}
                        {isAnswerCorrect2 === false && "Resposta correta: Letra A. Tendo em vista, que essa política não foi mencionada em nossa formação. Além disso, seu público alvo são crianças, pois como sua nomenclatura completa descreve, refere-se a Política Nacional de Atenção Integral à Saúde da Criança."}
                      </p>
                      <p>
                        2) É função das políticas de saúde contribuir para que mais pessoas alcancem as
                        idades avançadas com o melhor estado de saúde possível. Em outras
                        palavras, o envelhecimento ativo e saudável é o grande objetivo nesse
                        processo. Dessa forma, dentre as principais políticas de saúde destinadas à
                        esse público, a única que NÃO é voltada especificamente a essa população é
                        a:
                        <br />
                      </p>
                      <div className={styles.opsao}>
                        <p>Selecione a alternativa Correta:</p>
                        <label className={styles.optionLabel}>
                          <input type="radio" name="question2" value="a" onClick={() => checkAnswer2('a')} className={styles.optionButton} />
                          a) PNAISC
                        </label>
                        <br />
                        <label className={styles.optionLabel}>
                          <input type="radio" name="question2" value="b" onClick={() => checkAnswer2('b')} className={styles.optionButton} />
                          b) PNPS
                        </label>
                        <br />
                        <label className={styles.optionLabel}>
                          <input type="radio" name="question2" value="c" onClick={() => checkAnswer2('c')} className={styles.optionButton} />
                          c) PNSPI
                        </label>
                        <br />
                        <label className={styles.optionLabel}>
                          <input type="radio" name="question2" value="d" onClick={() => checkAnswer2('d')} className={styles.optionButton} />
                          d) PNAB
                        </label>
                        <br />
                      </div>
                      <div className={styles.link}>
                        <button onClick={() => { setQuestion(3) }} className={styles.button}>
                          Proxima questão
                        </button>
                      </div>
                    </div>
                    :
                    question == 3
                    ?
                    <div className={styles.question}>
                      <p className={isAnswerCorrect === true ? 'correct' : 'incorrect'}>
                        {isAnswerCorrect3 === true && "Muito bem, você assinalou a resposta correta."}
                        {isAnswerCorrect3 === false && "Resposta correta: Letra B. Por mais que seus objetivos sejam os mesmos, cada política de saúde se caracteriza de uma forma diferente, porém complementar. Em caso de dúvidas, retorne ao nosso segundo vídeo de conteúdo ou acesse o material disponível, para mais detalhes.."}
                      </p>
                      <p>
                        3) Assinale a alternativa que apresenta a ordem correta das numerações
                        correspondentes às suas descrições:<br />
                        I- Política Nacional de Promoção da Saúde.<br />
                        II- A Política Nacional de Saúde da Pessoa Idosa.<br />
                        III- A Política Nacional de Atenção Básica.<br />
                        ( ) Define que a atenção à saúde das pessoas idosas terá como porta de entrada
                        a Atenção Básica/Saúde da Família, tendo como referência a rede de serviços
                        especializada de média e alta complexidade.<br />
                        ( ) Contempla as estratégias de implementação, responsáveis por nortear as
                        práticas de ações locais em relação à promoção da saúde da população idosa.<br />
                        ( ) Caracteriza-se por desenvolver um conjunto de ações de saúde, no âmbito
                        individual e coletivo, que abrangem a promoção e a proteção à saúde, a prevenção
                        de agravos, o diagnóstico, o tratamento, a reabilitação e a manutenção da saúde.
                        <br />
                      </p>
                    <div className={styles.opsao}>
                      <p>Selecione a alternativa Correta:</p>
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question2" value="a" onClick={() => checkAnswer3('a')} className={styles.optionButton} />
                        a) I, II e III.
                      </label>
                      <br />
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question2" value="b" onClick={() => checkAnswer3('b')} className={styles.optionButton} />
                        b) II, III e I.
                      </label>
                      <br />
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question2" value="c" onClick={() => checkAnswer3('c')} className={styles.optionButton} />
                        c) III, II e I.
                      </label>
                      <br />
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question2" value="d" onClick={() => checkAnswer3('d')} className={styles.optionButton} />
                        d) II, I, e III.
                      </label>
                      <br />
                    </div>
                <div className={styles.link}>
                  <button onClick={() => { setQuestion(4) }} className={styles.button}>
                    Proxima questão
                  </button>
                </div>
                
              </div>
                  :
                  question == 4
                  ?
                  <div className={styles.question}>
                  <p className={isAnswerCorrect === true ? 'correct' : 'incorrect'}>
                    {isAnswerCorrect4 === true && "Muito bem, você assinalou a resposta correta."}
                    {isAnswerCorrect4 === false && "Resposta correta: Letra C. Tendo em vista, que o quesito III está incorreto, pois para a efetivação do acolhimento é preciso romper com a fragmentação do processo de trabalho e interação precária nas equipes multiprofissionais, pois, é preciso reconhecer a complementaridade interdisciplinar e a integração entre a rede básica e o sistema de referências."}
                  </p>
                  <p>
                    4) A operacionalização da Política Nacional de Humanização dá-se pela oferta
                    de dispositivos. Dentre esses, destaca-se o “Acolhimento”, que tem a
                    característica de um modo de operar os processos de trabalho em saúde de
                    forma a dar atenção à todos que procuram os serviços de saúde, ouvindo suas
                    necessidades e assumindo no serviço uma postura capaz de acolher, escutar e
                    pactuar respostas mais adequadas junto aos usuários. Para a efetivação do
                    Acolhimento da pessoa idosa, os profissionais de saúde devem compreender
                    as especificidades dessa população e a própria legislação brasileira vigente.
                    Para isso, devem:<br />
                    I- Estar preparados para lidar com as questões do processo de envelhecimento, a
                    partir de qualificações, especialmente no que se refere à saúde da pessoa idosa;<br />
                    II- Facilitar o acesso das pessoa idosas aos diversos níveis de complexidade da
                    atenção;<br />
                    III- Trabalhar de maneira fragmentada, sem investir na interação com a equipe
                    profissional e sua diversas áreas;<br />
                    IV- Estabelecer uma relação respeitosa, considerando que, com a experiência de
                    toda uma vida, as pessoas se tornam em geral mais sábias, desenvolvem maior
                    senso de dignidade e prudência e esperam ser reconhecidas por isso.
                    <br />
                  </p>
                  <div className={styles.opsao}>
                    <p>Selecione a alternativa Correta:</p>
                    <label className={styles.optionLabel}>
                      <input type="radio" name="question3" value="a" onClick={() => checkAnswer4('a')} className={styles.optionButton} />
                      a) I e II.
                    </label>
                    <br />
                    <label className={styles.optionLabel}>
                      <input type="radio" name="question3" value="b" onClick={() => checkAnswer4('b')} className={styles.optionButton} />
                      b) II e III.
                    </label>
                    <br />
                    <label className={styles.optionLabel}>
                      <input type="radio" name="question3" value="c" onClick={() => checkAnswer4('c')} className={styles.optionButton} />
                      c) I e IV.
                    </label>
                    <br />
                    <label className={styles.optionLabel}>
                      <input type="radio" name="question3" value="d" onClick={() => checkAnswer4('d')} className={styles.optionButton} />
                      d) II e IV.
                    </label>
                    <br />
                  </div>
                  <div className={styles.link}>
                    <button onClick={() => { setQuestion(5) }} className={styles.button}>
                      Proxima questão
                    </button>
                  </div>
              </div>
                  
                    :
                    question == 5
                    ?
                    <div className={styles.question}>
                    <p className={isAnswerCorrect === true ? 'correct' : 'incorrect'}>
                      {isAnswerCorrect5 === true && "Muito bem, você assinalou a resposta correta."}
                      {isAnswerCorrect5 === false && "Resposta correta: Letra D. É de extrema importância que durante o processo de comunicação com a pessoa idosa, o profissional de saúde, cuidador ou familiar fale de frente, mantendo contato visual, de preferência em um lugar iluminado, sem cobrir sua boca e, não se vire ou se afaste enquanto fala, para que de fato, a comunicação seja efetiva."}
                    </p>
                    <p>
                      5) A comunicação efetiva é mais do que uma troca de palavras, trata-se de um
                      processo dinâmico que permite que as pessoas se tornem acessíveis umas às
                      outras por meio do compartilhamento de sentimentos, opiniões, experiências e
                      informações. Diante disso, dentre as dicas abaixo, qual delas NÃO serve para
                      aprimorar a comunicação com a pessoa idosa:
                    </p>
                    <div className={styles.opsao}>
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question4" value="a" onClick={() => checkAnswer5('a')} className={styles.optionButton} />
                        a) Use frases curtas e objetivas, com uma linguagem clara, evitando-se a adoção de termos técnicos que podem não ser compreendidos pela pessoa idosa
                      </label>
                      <br />
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question4" value="b" onClick={() => checkAnswer5('b')} className={styles.optionButton} />
                        b) Pergunte a pessoa idosa se ela entendeu bem a explicação, se houve alguma
                        dúvida. Repita a informação, quando essa for erroneamente interpretada,
                        utilizando palavras diferentes e, de preferência, uma linguagem mais
                        apropriada à sua compreensão.
                      </label>
                      <br />
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question4" value="c" onClick={() => checkAnswer5('c')} className={styles.optionButton} />
                        c) Chame a pessoa idosa pelo próprio nome ou da forma como ela preferir. Evite
                        infantilizá-la utilizando termos inapropriados como “vovô(ó)”, “querido(a)”, ou
                        ainda, utilizando termos diminutivos desnecessários (“bonitinho(a)”,
                        “lindinho(a)” etc).
                      </label>
                      <br />
                      <label className={styles.optionLabel}>
                        <input type="radio" name="question4" value="d" onClick={() => checkAnswer5('d')} className={styles.optionButton} />
                        d) Não importa a forma como você se porta na hora de se comunicar, só falar as
                        informações necessárias é o suficiente nesse processo.
                      </label>
                      <br />
                    </div>
                    <div className={styles.link}>
                      <button onClick={() => { setFase(2) }} className={styles.button}>
                        Proxima Fase
                      </button>
                    </div>
                  </div>
                      :
                      null
              }
                    </div>
          )}

              {fase == 2 && (
                <div className={styles.fase}>
                  <div className={styles.videoItem}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CjjHqMp3f7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <Link className={styles.link} href={"https://drive.google.com/uc?export=download&id=13ss4BNdOrx-vus9HMhSn5RWpfuNlX2VP"}>
                    <button className={styles.button}>
                      Baixar material complementar
                    </button>
                  </Link>
                </div>
              )}

              {fase == 3.1 && (
                <div className={styles.fase}>
                  {/* Renderizar seus vídeos aqui */}
                  {/* Exemplo de vídeo: */}

                  <div className={styles.videoItem}>
                    <h2>• Video 1</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/y-ASs2Ej6o8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <div className={styles.link}>
                    <button onClick={() => { setFase(3.2) }} className={styles.button}>
                      Proximo video
                    </button>
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
                  </div>
                  <Link className={styles.link} href={"https://drive.google.com/uc?export=download&id=13ss4BNdOrx-vus9HMhSn5RWpfuNlX2VP"}>
                    <button className={styles.button}>
                      Baixar material complementar
                    </button>
                  </Link>
                </div>
              )}

              {fase == 4 && (
                <div className={styles.fase}>
                  {/* Renderizar seus vídeos aqui */}
                  {/* Exemplo de vídeo: */}
                  <div className={styles.videoItem}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2BOoiaQT63A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <Link className={styles.link} href={"https://drive.google.com/uc?export=download&id=13ss4BNdOrx-vus9HMhSn5RWpfuNlX2VP"}>
                    <button className={styles.button}>
                      Baixar material complementar
                    </button>
                  </Link>
                </div>
              )}
          </div>
            </div>
      </Background>
    </>
  );
}

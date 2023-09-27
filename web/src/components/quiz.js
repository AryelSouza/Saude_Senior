import styles from "@/styles/Capacitacao.module.css";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Quiz({ fase, setFase }) {
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const questions = [
    {
      questionText:
        "1) O envelhecimento pode ser compreendido sobre dois processos diferentes. O primeiro é conhecido como o processo natural, onde há diminuição progressiva da reserva funcional dos indivíduos o que, em condições normais, não costuma provocar qualquer problema. Tanto que, certas alterações decorrentes desse processo podem ter seus efeitos minimizados pela assimilação de um estilo de vida mais ativo. Porém, no segundo processo, há associação de condições de sobrecarga como, por exemplo, doenças, acidentes e estresse emocional, podendo ocasionar uma condição patológica que requeira assistência. Essas descrições correspondem, respectivamente, aos processos de:",
      options: [
        { value: "a", text: "Sequencialidade e Senilidade" },
        { value: "b", text: "Universalidade e Irreversibilidade" },
        { value: "c", text: "Senescência e Senilidade" },
        { value: "d", text: "Irreversibilidade e Senescência" },
      ],
      correctAnswer: "c",
      explanation:
        "Resposta correta: Letra C. Ao longo dessa etapa, em nossa formação, tivemos a oportunidade de conhecer que os dois processos definidos acima e correspondentes à compreensão do envelhecimento condizem com a Senescência e Senilidade.",
    },
    {
      questionText:
        "2) É função das políticas de saúde contribuir para que mais pessoas alcancem as idades avançadas com o melhor estado de saúde possível. Em outras palavras, o envelhecimento ativo e saudável é o grande objetivo nesse processo. Dessa forma, dentre as principais políticas de saúde destinadas a esse público, a única que NÃO é voltada especificamente a essa população é a:",
      options: [
        { value: "a", text: "PNAISC" },
        { value: "b", text: "PNPS" },
        { value: "c", text: "PNSPI" },
        { value: "d", text: "PNAB" },
      ],
      correctAnswer: "a",
      explanation:
        "Resposta correta: Letra A. Tendo em vista que essa política não foi mencionada em nossa formação. Além disso, seu público-alvo são crianças, pois, como sua nomenclatura completa descreve, refere-se à Política Nacional de Atenção Integral à Saúde da Criança.",
    },
    {
      questionText:(
      <pre>
      {`3) Assinale a alternativa que apresenta a ordem correta das numerações correspondentes às suas descrições:
      I- Política Nacional de Promoção da Saúde.
      II- A Política Nacional de Saúde da Pessoa Idosa.
      III- A Política Nacional de Atenção Básica.
      ( ) Define que a atenção à saúde das pessoas idosas terá como porta de entrada a Atenção Básica/Saúde da Família, tendo como referência a rede de serviços especializada de média e alta complexidade.
      ( ) Contempla as estratégias de implementação, responsáveis por nortear as práticas de ações locais em relação à promoção da saúde da população idosa.
      ( ) Caracteriza-se por desenvolver um conjunto de ações de saúde, no âmbito individual e coletivo, que abrangem a promoção e a proteção à saúde, a prevenção de agravos, o diagnóstico, o tratamento, a reabilitação e a manutenção da saúde.`}
    </pre>
  ),
              options: [
        { value: "a", text: "I, II e III." },
        { value: "b", text: "II, III e I." },
        { value: "c", text: "III, II e I." },
        { value: "d", text: "II, I e III." },
      ],
      correctAnswer: "b",
      explanation:
        "Resposta correta: Letra B. Por mais que seus objetivos sejam os mesmos, cada política de saúde se caracteriza de uma forma diferente, porém complementar. Em caso de dúvidas, retorne ao nosso segundo vídeo de conteúdo ou acesse o material disponível, para mais detalhes.",
    },
    {
      questionText:
        "4) A operacionalização da Política Nacional de Humanização dá-se pela oferta de dispositivos. Dentre esses, destaca-se o “Acolhimento”, que tem a característica de um modo de operar os processos de trabalho em saúde de forma a dar atenção à todos que procuram os serviços de saúde, ouvindo suas necessidades e assumindo no serviço uma postura capaz de acolher, escutar e pactuar respostas mais adequadas junto aos usuários. Para a efetivação do Acolhimento da pessoa idosa, os profissionais de saúde devem compreender as especificidades dessa população e a própria legislação brasileira vigente. Para isso, devem:",
      options: [
        { value: "a", text: "I e II." },
        { value: "b", text: "II e III." },
        { value: "c", text: "I e IV." },
        { value: "d", text: "II e IV." },
      ],
      correctAnswer: "c",
      explanation:
        "Resposta correta: Letra C. Tendo em vista que o quesito III está incorreto, pois para a efetivação do acolhimento é preciso romper com a fragmentação do processo de trabalho e interação precária nas equipes multiprofissionais, pois, é preciso reconhecer a complementaridade interdisciplinar e a integração entre a rede básica e o sistema de referências.",
    },
    {
      questionText:
        "5) A comunicação efetiva é mais do que uma troca de palavras, trata-se de um processo dinâmico que permite que as pessoas se tornem acessíveis umas às outras por meio do compartilhamento de sentimentos, opiniões, experiências e informações. Diante disso, dentre as dicas abaixo, qual delas NÃO serve para aprimorar a comunicação com a pessoa idosa:",
      options: [
        { value: "a", text: "Use frases curtas e objetivas, com uma linguagem clara, evitando-se a adoção de termos técnicos que podem não ser compreendidos pela pessoa idosa" },
        { value: "b", text: "Pergunte a pessoa idosa se ela entendeu bem a explicação, se houve alguma dúvida. Repita a informação, quando essa for erroneamente interpretada, utilizando palavras diferentes e, de preferência, uma linguagem mais apropriada à sua compreensão." },
        { value: "c", text: "Chame a pessoa idosa pelo próprio nome ou da forma como ela preferir. Evite infantilizá-la utilizando termos inapropriados como “vovô(ó)”, “querido(a)”, ou ainda, utilizando termos diminutivos desnecessários (“bonitinho(a)”, “lindinho(a)” etc)." },
        { value: "d", text: "Não importa a forma como você se porta na hora de se comunicar, só falar as informações necessárias é o suficiente nesse processo." },
      ],
      correctAnswer: "d",
      explanation:
        "Resposta correta: Letra D. É de extrema importância que durante o processo de comunicação com a pessoa idosa, o profissional de saúde, cuidador ou familiar fale de frente, mantendo contato visual, de preferência em um lugar iluminado, sem cobrir sua boca e, não se vire ou se afaste enquanto fala, para que de fato, a comunicação seja efetiva.",
    },
  ];

  const checkAnswer = () => {
    const currentQuestion = questions[question];
    if (answer.toLowerCase() === currentQuestion.correctAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  useEffect(() => {
    setIsAnswerCorrect(null);
  }, [question, fase]);

  const nextQuestion = () => {
    if (question < questions.length - 1) {
      setQuestion(question + 1);
      setAnswer("");
      setIsAnswerCorrect(null);
    } else {
      setFase(2.1);
    }
  };

  return(
    <div className={styles.fase}>
      {question < questions.length ? (
        <div className={styles.question}>
          <p className={isAnswerCorrect === true ? styles.correct : styles.incorrect}>
            {isAnswerCorrect === true && (
              <span style={{ color: "green" }}> Muito bem, você assinalou a resposta correta.</span>
            )}
            {isAnswerCorrect === false && (
              <span style={{ color: "red" }}>{questions[question].explanation}</span>
            )}
          </p>
          <p>{questions[question].questionText}</p>
          <div className={styles.opsao}>
            {questions[question].options.map((option) => (
              <label
                key={option.value}
                className={styles.optionLabel}
                htmlFor={`question${question}-${option.value}`}
              >
                <input
                  type="radio"
                  id={`question${question}-${option.value}`}
                  name={`question${question}`}
                  value={option.value}
                  onClick={() => setAnswer(option.value)}
                  className={styles.optionButton}
                />
                {option.text}
                <br />
              </label>
            ))}
          </div>
          <div className={styles.botoes}>
            <div className={styles.link}>
              <button onClick={checkAnswer} className={styles.button}>
                Verificar Resposta
              </button>
              {
                question == 4
                ?
                <button onClick={nextQuestion} className={styles.button}>
                  Próxima Fase
                </button>
                :
                <button onClick={nextQuestion} className={styles.button}>
                  Próxima Questão
                </button>
              }
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Parabéns! Você completou o quiz.</p>
          <div className={styles.link}>
            <button onClick={() => setFase(2.1)} className={styles.button}>
              Próxima Fase
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
}

import styles from "@/styles/Capacitacao.module.css";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./button";

export default function VouF({ fase, setFase }) {
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const questions = [
    {
      questionText:
        "1) De acordo com a OMS as Grandes Síndromes Geriátricas são condições de saúde simples, que quase não atingem as pessoas idosas, advém de poucas causas, afetando poucos sistemas orgânicos e que consequentemente não comprometem a independência funcional e qualidade de vida dessa população.",
      options: [
        { value: "v", text: "Verdadeiro" },
        { value: "f", text: "Falso" },
      ],
      correctAnswer: "f",
      explanation:
        "FALSO. As Grandes Síndromes Geriátricas são condições de saúde complexas, prevalentes em pessoas idosas, especialmente naquelas mais frágeis, que não se enquadram em categorias de doenças definidas e que frequentemente são consequências de múltiplos fatores subjacentes, afetando vários sistemas orgânicos. Além disso, evoluem de modo crônico, comprometem a independência funcional e trazem perda significativa de qualidade de vida, necessitando, assim, de uma abordagem multidisciplinar.",
    },
    {
      questionText:
        "2)Existem sete principais Síndromes Geriátricas, são elas: Incapacidade cognitiva; Iatrogenia; Incontinência Urinária (IU) e Incontinência Fecal (IF); Instabilidade Postural e Queda; Imobilidade; Incapacidade de Comunicação e Insuficiência ou falta de apoio sociofamiliar",
      options: [
        { value: "v", text: "Verdadeiro" },
        { value: "f", text: "Falso" },
      ],
      correctAnswer: "v",
      explanation:
        "VERDADEIRO. Essas principais Síndromes existem e são até conhecidas como as 7I's. São condições complexas, por isso, é demanda dos profissionais de saúde conhecer a maneira como elas acontecem, para assim, realizar um diagnóstico cuidadoso, instituir um tratamento adequado e então definir objetivos claros e realistas para a reabilitação.",
    },
    {
      questionText:
        "3) A Saúde Bucal não possui a capacidade de interferir na Saúde Geral da Pessoa Idosa, nem prejudicar o processo de envelhecimento saudável, partindo da ideia de que compreendem órgãos e sistemas diferentes do corpo humano, logo não se relacionam",
      options: [
        { value: "v", text: "Verdadeiro" },
        { value: "f", text: "Falso" },
      ],
      correctAnswer: "f",
      explanation:
        "FALSO. Pesquisas recentes alertam para a estreita relação entre saúdebucal e saúde geral, demonstrando que a má condição de saúde bucal,principalmente a presença de doenças periodontais, constitui fator predisponente adoenças sistêmicas, como pneumonia, cardiopatias e diabetes, bem comoagrava/debilita o estado geral de saúde da pessoa idosa. Da mesma forma, a mácondição de saúde pode ocasionar problemas bucais ou agravar os já existentes.Como uma via de mão dupla, os termos desta relação se interferem mutuamente epodem, ao entrar num ciclo infindável de agravos à saúde, prejudicar o processo deenvelhecimento saudável.",
    },
    {
      questionText:
        "4) A equipe de saúde bucal, ao atender a pessoa idosa na atenção básica, deve buscar compreender a sua situação de saúde física, contextualizada com aspectos emocionais, cognitivos, sociais e econômicos e, a partir dessa análise, formular um plano preventivo e terapêutico adequado à sua realidade e necessidades.",
      options: [
        { value: "v", text: "Verdadeiro" },
        { value: "f", text: "Falso" },
      ],
      correctAnswer: "v",
      explanation:
        "VERDADEIRO. Deve ser realizado um exame criterioso para detecção e diagnóstico das condições bucais, procurando associar possíveis fatores determinantes das doenças bucais. Uma boa anamnese, além de revelar informações sobre as condições de saúde-doença e de seus hábitos, é momento especial para se observar o comportamento e as atitudes em relação à sua saúde bucal, à saúde como um todo e posturas perante a vida.",
    },
  ];

  useEffect(() => {
    const currentQuestion = questions[question];
    if (answer.toLowerCase() === currentQuestion.correctAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  }, [answer])

  useEffect(() => {
    setIsAnswerCorrect(null);
  }, [question, fase]);

  const nextQuestion = () => {
    if (question < questions.length - 1) {
      setQuestion(question + 1);
      setAnswer("");
      setIsAnswerCorrect(null);
    }
    else {
      setQuestion(question + 1);
    }
  };

  return (
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

          {questions[question].options.map((option) => (
            <div className={styles.linkVouF}>
              <button onClick={() => { setAnswer(option.value) }} className={styles.button}>
                {option.text}
              </button>
            </div>
          ))}
          {
            isAnswerCorrect != null
              ?
              <div className={styles.linkVouF}>
                <button onClick={() => { nextQuestion() }} className={styles.button}>
                  {
                    question == 3
                      ?
                      "Finalizar Questionário"
                      :
                      "Próxima pergunta"
                  }
                </button>
              </div>
              :
              null
          }
        </div>
      ) : (
        <div className={styles.fieldCenter}>
          <h1>Parabens! Você concluiu a terceira fase!</h1>
          <div className={styles.botao}>
            <Button click={() => setFase(4.1)}>
              Proxima Fase
            </Button>
          </div>
        </div>
      )}
    </div>
  );

}

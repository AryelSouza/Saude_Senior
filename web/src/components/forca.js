import React, { Component } from "react";
import Image from "next/image";
import styles from '@/styles/Forca.module.css';
import img0 from "@/components/images/0.jpg";
import img1 from "@/components/images/1.jpg";
import img2 from "@/components/images/2.jpg";
import img3 from "@/components/images/3.jpg";
import img4 from "@/components/images/4.jpg";
import img5 from "@/components/images/5.jpg";
import img6 from "@/components/images/6.jpg";

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };



    constructor(props) {
        super(props);
        this.state = {
            nWrong: 0,
            guessed: new Set(),
            answer: "caderneta de saúde da pessoa idosa",
            phase: 0
        };
        this.handleGuess = this.handleGuess.bind(this);
        this.reset = this.reset.bind(this);
    }

    end = () => {
        this.props.setFase(5)
    }

    nextPhase = () => {
        let newAnswer;
        if (this.state.phase == 1) {
            newAnswer = "planejamento"
        } else {
            newAnswer = "cidadania"
        }
        this.setState({
            nWrong: 0,
            guessed: new Set(),
            answer: newAnswer,
            phase: this.state.phase + 1
        });
    }

    reset() {
        this.setState({
            nWrong: 0,
            guessed: new Set(),
            answer: this.state.answer,
            phase: this.state.phase
        });
    }

    guessedWord() {
        return this.state.answer
            .split("")
            .map(ltr => (this.state.guessed.has(ltr) ? ltr : ltr == " " ? "-" : "_"));
    }

    /** handleGuest: handle a guessed letter:
      - add to guessed letters
      - if not in answer, increase number-wrong guesses
    */
    handleGuess(evt) {
        let ltr = evt.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));
    }

    /** generateButtons: return array of letter buttons to render */
    generateButtons() {
        return "aãáàbcçdeéfghiíjklmnoõópqrstuúvwxyz".split("").map(ltr => (
            <button
                className={styles.HangmanBtn}
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ));
    }

    /** render: render game */
    render() {
        const gameOver = this.state.nWrong >= this.props.maxWrong;
        const altText = `${this.state.nWrong}/${this.props.maxWrong} palpites`;
        const isWinner = this.guessedWord().filter(elemento => elemento !== "-").join("") === (this.state.answer).replace(/\s/g, '');
        let gameState = this.generateButtons();
        if (isWinner) gameState = "Você Venceu!!!";
        if (gameOver) gameState = "Não foi dessa vez... :(";
        return (
            this.state.phase === 3
                ?
                <div className={styles.fieldCenter}>
                    <h1>Parabens! Você concluiu a quarta fase!</h1>
                    <div className={styles.botao}>
                        <button className={styles.HangmanReset} onClick={()=>this.end()}>
                            Ver Projetos
                        </button>
                    </div>
                </div>
                :
                <div className={styles.Hangman}>
                    <Image src={this.props.images[this.state.nWrong]} alt={altText} />
                    <p className={styles.HangmanWrong}>Palpites Errados: {this.state.nWrong}/6</p>
                    <p className={styles.HangmanWord}>
                        {!gameOver ? this.guessedWord() : this.state.answer}
                    </p>
                    <p className={styles.HangmanBtns}>{gameState}</p>
                    {
                        gameOver
                            ?
                            <button className={styles.HangmanReset} onClick={this.reset}>
                                Recomeçar
                            </button>
                            :
                            isWinner
                                ?
                                <button className={styles.HangmanReset} onClick={this.nextPhase}>
                                    Próxima Rodada
                                </button>
                                :
                                null
                    }
                </div>
        );
    }
}

export default Hangman;
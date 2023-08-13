import styles from '@/styles/erro.module.css'
import Background from '@/components/background'


export default function NaoEcontrado() {

  return (
    <Background>
      <div className={styles.body}>
        <div className="container">
          <div className="row">
            <div className="texto">
              <h1>Não encontramos esse local no Google Maps ;-;</h1>
              <p className={styles.animatedText}>
                Lamentamos o ocorrido, estamos trabalhando nisso!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Background>
  )
}

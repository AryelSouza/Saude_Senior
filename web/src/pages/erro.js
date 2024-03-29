import styles from '@/styles/erro.module.css'
import {useRouter} from 'next/router'
import Background from '@/components/background'


export default function Erro() {
  const router = useRouter();
  return (
    <Background>
      <div className={styles.body}>
        <div className="container">
          <div className="row">
            <div className="texto">
              <h1>O link não possui correspondência ;-;</h1>
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

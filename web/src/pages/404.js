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
              <h1>Desculpe essa página não existe ;-;</h1>
              <p className={styles.animatedText}>
                Tente navegar a partir da página incial do site!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Background>
  )
}

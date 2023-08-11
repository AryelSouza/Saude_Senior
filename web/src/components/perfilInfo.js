import styles from "@/styles/Info.module.css"
import { Poppins } from 'next/font/google'

const poppins400 = Poppins({ subsets: ['latin'], weight: "400" })
const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })

/* componente criado apenas para montar a estrutura de cada perfil na pg info */
export default function Perfil({ imageUrl, username, profileInfo }){
    return(
    <div className={styles.perfil}>
        <div className={styles.detail}>
            <img src={imageUrl} alt="Profile Picture" className={styles.profileImg} />
            <h2 style={poppins600.style}>{username}</h2>
            <p style={poppins400.style}>{profileInfo}</p>
        </div>
        
    </div>
    )
}
import styles from "@/styles/apresentacao.module.css"
import Image from "next/image"

export default function Apresentacao({src}){
    const styleBg = {
        backgroundImage: `url(${src})`,
        /* outras propriedades de estilo */
      };
    return(
        <div style={styleBg} className={styles.contain}>
        </div>
    )
}
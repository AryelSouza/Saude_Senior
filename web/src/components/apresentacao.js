import styles from "@/styles/apresentacao.module.css"
import { useRouter } from "next/router";

export default function Apresentacao({click,src}){
    const router = useRouter()
    const styleBg = {
        backgroundImage: `url(${src})`,
        /* outras propriedades de estilo */
      };
    return(
        <div style={styleBg} className={styles.contain}>
        </div>
    )
}
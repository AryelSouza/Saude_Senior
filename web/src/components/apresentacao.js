import styles from "@/styles/apresentacao.module.css"
import { useRouter } from "next/router";

export default function Apresentacao({route, click ,src}){
    const router = useRouter()
    const styleBg = {
        backgroundImage: `url(${src})`,
        /* outras propriedades de estilo */
      };
    return(
        <div onClick={()=> route ? router.push(route) : click()} style={styleBg} className={styles.contain}>
        </div>
    )
}
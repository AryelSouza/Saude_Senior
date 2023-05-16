import SimpleSlider from "@/components/carrossel";
import styles from "@/styles/Index.module.css"

export default function Teste({children}) {
    return(
        <div className={styles.container}>
            <SimpleSlider>
                {children}
            </SimpleSlider>
        </div>
    )
}
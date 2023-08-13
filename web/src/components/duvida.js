import Modal from "react-modal"
import styles from "@/styles/duvida.module.css"

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  export default function ModalDuvida({children, duvida}) {
    return (
        <Modal className={styles.modal}>
            <h1>
                {duvida}
            </h1>
            <div className={styles.resposta}>

            </div>
        </Modal>
    )
  }
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Background from "@/components/background";
import HeadPadrao from "@/components/headPadrao";
import Apresentacao from "@/components/apresentacao";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useForm } from "react-hook-form"

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

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [nStars, setNStars] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(
    ()=>{console.log(nStars)},[nStars]
  )

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    arrows: true,
    autoplay: true,
    slidesToShow: 1, // define quantos slides serão exibidos por vez
    slidesToScroll: 1, // define quantos slides serão percorridos por vez,
  };
  const router = useRouter();
  const styleBgs = {
    big: "/big.png",
    apresentacao: "/apresentacao.png",
    mudar: "/mudar.png",
    profs: "/profs.png",
  };
  return (
    <>
      <HeadPadrao>Home</HeadPadrao>
      <Background>
        <div className={styles.all}>
          {/* <Carrossel> */}

          <div className={styles.contain}>
            <Slider {...settings}>
              <div className={styles.box}>
                <img src={styleBgs.big}></img>
              </div>
              <div className={styles.box}>
                <img src={styleBgs.apresentacao}></img>
              </div>
              <div className={styles.box}>
                <img src={styleBgs.mudar}></img>
              </div>
              <div className={styles.box}>
                <img src={styleBgs.profs}></img>
              </div>
            </Slider>
          </div>

          <div className={styles.apresentacoes}>
            <Apresentacao route={"/info"} src={"/sobrenos.png"} />
            <Apresentacao route={"/maps"} src={"/explica.png"} />
            <Apresentacao route={"/capacitacao"} src={"/capacita.png"} />
            <Apresentacao route={"/feedback"} src={"/feedback.png"} />

          </div>
        </div>
      </Background>
    </>
  );
}

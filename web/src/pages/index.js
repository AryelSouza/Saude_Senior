import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import stylesGlobal from '@/styles/Global.module.css'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import SideBar from '@/components/sidebar'
import Background from '@/components/background'
import HeadPadrao from '@/components/headPadrao'
import BarraPesquisa from '@/components/barraPesquisa'
import Apresentacao from '@/components/apresentacao'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: true,
    autoplay: true,
    slidesToShow: 1, // define quantos slides serão exibidos por vez
    slidesToScroll: 1, // define quantos slides serão percorridos por vez,
  }
  const router = useRouter();
  const styleBgs = {
    big: "/big.png",
    apresentacao:"/apresentacao.png",
    mudar:"/mudar.png",
    profs:"/profs.png",
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

            <Apresentacao src={"/sobrenos.png"}/>
            <Apresentacao src={"/explica.png"}/>
            <Apresentacao src={"/capacita.png"}/>
            <Apresentacao src={"/feedback.png"}/>
          </div>

        </div>

      </Background>
    </>
  )
}

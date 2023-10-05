import styles from '@/styles/Maps.module.css'
import { useRouter } from 'next/router'
import Background from '@/components/background'
import HeadPadrao from '@/components/headPadrao'
import stylesSearch from '@/styles/barraPesquisa.module.css'
import data from "@/json-saudesenior.json"
import { BiSearchAlt2 } from "react-icons/bi"
import { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1, // define quantos slides serão exibidos por vez
  slidesToScroll: 1, // define quantos slides serão percorridos por vez,
};

export default function Maps() {
  const [flux, setFlux] = useState(false)
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("")
  const router = useRouter();
  const styleBg = {
    backgroundImage: `url("/big.png")`,
    /* outras propriedades de estilo */
  };

  return (
    <>
      <HeadPadrao>Maps</HeadPadrao>
      <Background>

        <div className={styles.all}>

          {
            !flux
              ?
              <div className={styles.center}>
                <div className={styles.contain}>
                  <Slider {...settings} className={styles.images}>
                    <Image className={styles.image} src={"/flux/16.svg"} width={700} height={700} />
                    <Image className={styles.image} src={"/flux/17.svg"} width={700} height={700} />
                    <Image className={styles.image} src={"/flux/18.svg"} width={700} height={700} />
                    <Image className={styles.image} src={"/flux/19.svg"} width={700} height={700} />
                    <Image className={styles.image} src={"/flux/20.svg"} width={700} height={700} />
                    <Image className={styles.image} src={"/flux/21.svg"} width={700} height={700} />
                    <Image className={styles.image} src={"/flux/22.svg"} width={700} height={700} />
                    <Image className={styles.image} src={"/flux/23.svg"} width={700} height={700} />
                    <Image onClick={() => { setFlux(true) }} className={styles.imageFim} src={"/flux/24.svg"} width={700} height={700} />
                  </Slider>
                  <div className={styles.botoes}>
                    <div className={styles.link}>
                      <button onClick={() => { setFlux(true) }} className={styles.button}>
                        Direcionar a Pessoa Idosa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              :
              <>
                <div className={styles.search}>
                  <div className={stylesSearch.ReportPesquisa}>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className={stylesSearch.ReportBusca} placeholder="Buscar... (Nome, Endereço, Tipo ou Telefone)" />
                    <BiSearchAlt2 color='#00000035' className={stylesSearch.icon} />
                  </div>
                  <div className={stylesSearch.filter}>
                    <select onChange={(e) => setFilter(e.target.value)} className={stylesSearch.select}>
                      <option value={""}>Todos</option>
                      {
                        [...new Set(data.map(objeto => objeto.tipo))].map(
                          tipo => <option value={tipo}>{tipo}</option>
                        )
                      }
                    </select>
                  </div>
                </div>
                <div className={styles.elements}>
                  {
                    data
                      .filter((e) => {
                        if (search.length >= 3) {
                          return (
                            (e.tipo).toLowerCase().includes(search.toLowerCase())
                            || (e.nome).toLowerCase().includes(search.toLowerCase())
                            || (e.endereco).toLowerCase().includes(search.toLowerCase())
                            || (e.telefone).includes(search)
                          )
                        } else {
                          return e
                        }
                      })
                      .filter((e) => (e.tipo).includes(filter))
                      .map((element, index) =>
                        <div className={styles.element} key={index}>
                          Nome: {element.nome}<br />
                          Endereço: {element.endereco}<br />
                          Tipo: {element.tipo}<br />
                          Telefone: {element.telefone == "null" ? "Desconhecido" : element.telefone}<br />
                          <a href={element.maps != "zona rural" && element.maps != "---" ? element.maps : "/naoencontrado"} target='_blank'>
                            {
                              element.maps == "zona rural"
                                ? "Zona Rural"
                                : element.maps == "---"
                                  ? "Local não encontrado no mapa"
                                  : "Clique aqui para ver no mapa"
                            }
                          </a>
                        </div>
                      )
                  }
                </div>
              </>
          }
        </div>
      </Background>
    </>
  )
}

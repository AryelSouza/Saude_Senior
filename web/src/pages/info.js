import { useRouter } from 'next/router'
import Background from '@/components/background'
import HeadPadrao from '@/components/headPadrao'
import styles from "@/styles/Info.module.css"
import Image from 'next/image'

import { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'
import image1 from "@/images/1.svg"
import image2 from "@/images/2.svg"
import image3 from "@/images/3.svg"
import image4 from "@/images/4.svg"
import image5 from "@/images/5.svg"
import image6 from "@/images/6.svg"
import image7 from "@/images/7.svg"

const images = [image1,image2,image3,image4,image5,image6,image7]

/* componente responsável pela página info */
export default function Info() {
  const router = useRouter();
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(()=>{
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])

  return (
    <>
      <HeadPadrao>Info</HeadPadrao>
      <Background>
        <div className={styles.global}>
          <h1 >Equipe de Produção</h1>
          <div className={styles.all}>
            <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor: "grabbing"}}>
              <motion.div 
                className={styles.inner}
                drag={"x"}
                dragConstraints={{right:0, left: -width}}
              > 
                {
                  images.map(image => (
                    <motion.div className={styles.item} key={image}>
                      <Image className={styles.img} src={image} alt='Apresentação dos relacionados'/>
                    </motion.div>
                  ))
                }

              </motion.div>
            </motion.div>
          </div>
        </div>
      </Background>
    </>
  );
}
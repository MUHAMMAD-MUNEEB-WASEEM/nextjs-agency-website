import styles from '../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'


function Intro() {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh"/>
            <Circle backgroundColor="#01c686" bottom="-50vh" right="-40vh"/>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    <span className={styles.brand}>AVOCAD0</span> DIGITAL PRODUCT AGENCY
                </h1>
                <p className={styles.desc}> Create live segments and target the right people for messages based on
                    their behaviors.
                </p>
                <button className={styles.button}>DISCOVER</button>
            </div>

            <div className={styles.card}>
                <Image 
                    src={process.env.NEXT_PUBLIC_URL + '/img/Avocado.png'} 
                    layout='fill' 
                    objectFit="cover"
                    alt=""/>
            </div>
        </div>
    )
}

export default Intro

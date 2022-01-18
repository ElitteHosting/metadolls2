import React,{useState} from 'react'
import styles from '../styles/FAQ.module.css'
const FAQ = () => {
    const [toggleFAQ, setToggleFAQ] = useState(false);
    /*  onClick={()=>{setToggleMenu(!toggleMenu) */
    return (
        <section className={styles.RoadMapContainer}>
            <h2 className={styles.RoadMapTitle}>FAQ</h2>
            
            <div className={styles.RoadMapSteps} data-aos="zoom-in">
                <p className={styles.numerStyle}>How was the project born?</p>
                <p className={styles.descriptionStyle}>This project is created by colombian artist Alejandro Rincón, tattoo artist for over 7 years. It explores the link and effect that tattoos have in the construction of our identity now a days.

The body is represented by the Dolls, iconic objects fabricated in mass and registered in series, which results comparable to the characteristics of human condition in today's world. Additionally the tattoo is done over the inorganic base as an artistic expression and a form of customization, which offers a way of identification or differentiation.</p>
              
            </div>

            <div className={styles.RoadMapSteps} data-aos="zoom-in">
                <p className={styles.numerStyle}>**Who is the artist?**</p>
                <p className={styles.descriptionStyle}>This project is created by colombian artist Alejandro Rincón, tattoo artist for over 7 years. It explores the link and effect that tattoos have in the construction of our identity now a days.

The body is represented by the Dolls, iconic objects fabricated in mass and registered in series, which results comparable to the characteristics of human condition in today's world. Additionally the tattoo is done over the inorganic base as an artistic expression and a form of customization, which offers a way of identification or differentiation.</p>
              
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in">
                <p className={styles.numerStyle}>Minting Price? </p>
                <p className={styles.descriptionStyle}>0.04 WETH</p>
              
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in">
                <p className={styles.numerStyle}>Royalties?</p>
                <p className={styles.descriptionStyle}>3%</p>
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in">
                <p className={styles.numerStyle}>**Which blockchain is the collection going to be minted at?**</p>
                <p className={styles.descriptionStyle}>We chose Polygon for this dies project. We believe strongly on Ethereum as a Layer 1 for everything awesome that is happening with the growing development and artistic community and Polygon is a great layer 2 solution to reduce gas fees and increase current adoption.</p>
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in">
                <p className={styles.numerStyle}>Launch Date?</p>
                <p className={styles.descriptionStyle}> Mid Feb. </p>
            </div>
            <div className={styles.RoadMapSteps} data-aos="zoom-in">
                <p className={styles.numerStyle}>What is the phisical doll?</p>
                <p className={styles.descriptionStyle}>We will be launching a digital boutique on the metaverse only accesible to **MetaDoll** holders. There you would be able to purchase a hand made physical version of your Doll with the actual tattoos, jewelry made out of gold, platinum, swarosky and a variety of other things. </p>
            </div>
           

            
           
        </section>
    )
}

export default FAQ

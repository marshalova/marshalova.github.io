import styles from './AboutMe.module.scss'
import pic from './images/vera.png'
import {ExtLink} from "../../components";

export function AboutMe() {
    return (
        <div className={styles.AboutMe}>
            <div className={styles.AboutMeBody}>
                <div>
                    <h2>Hi! I'm Vera, a <strong>Product Designer & Analyst</strong>.</h2>
                    <p><strong>Product Designer</strong> with a focus on software and industrial system design.</p>
                    <p>My experience  as a business and systems analyst has equipped me with the skills to research solutions and understand user needs effectively.</p>
                    <p>My unique background means that with me, you get a <strong>Designer</strong> who also thinks like a <strong>Product Analyst</strong>. This makes sure your design looks good and is carefully planned.</p>
                    <p>I love challenges and working as part of a team. I regularly enhance my design skills and actively incorporate modern tools, such as AI, into my work.</p>
                </div>
                <img className={styles.AboutMeBodyPic} src={pic} alt={"Vera"} />
            </div>
            <div  className={styles.AboutMeFooter}>
                <ExtLink to={"https://docs.google.com/document/d/1fv2QTD2KMLOmLr9AzzDbtrJHmgVYzLVlTSF00fNH_BE/"}>Resume</ExtLink>
                <ExtLink to={"https://www.linkedin.com/in/vera-marshalova/"}>LinkedIn</ExtLink>
                <ExtLink to={"mailto:vera.marshalova@gmail.com"}>vera.marshalova@gmail.com</ExtLink>
            </div>
        </div>
    )
}

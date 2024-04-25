import styles from "./Footer.module.scss";
import { ExtLink } from "../../components";

export function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterSlogan}>Let's work together</div>
      <div className={styles.FooterLinks}>
        <ExtLink to={"https://www.linkedin.com/in/vera-marshalova-239768294/"}>
          Linkedin
        </ExtLink>
        <ExtLink to={"mailto:vera.marshalova@gmail.com"}>
          vera.marshalova@gmail.com
        </ExtLink>
      </div>
    </div>
  );
}

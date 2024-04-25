import React from "react";
import styles from "./Header.module.scss";
import { HeaderLink } from "./HeaderLink";
import { ExtLink } from "../../components";

export function Header() {
  return (
    <header className={styles.Header}>
      <HeaderLink to={"/"}>Vera Marshalova</HeaderLink>
      <div className={styles.HeaderLinks}>
        <HeaderLink to={"/cv"}>CV</HeaderLink>
        <ExtLink to={"https://www.linkedin.com/in/vera-marshalova-239768294/"}>
          LinkedIn
        </ExtLink>
        <ExtLink to={"https://www.behance.net/vera_marshalova"}>
          Behance
        </ExtLink>
        <ExtLink to={"mailto:vera.marshalova@gmail.com"}>
          vera.marshalova@gmail.com
        </ExtLink>
      </div>
    </header>
  );
}

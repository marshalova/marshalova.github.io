import React from "react";
import styles from "./ExtLink.module.scss";
import { Link } from "react-router-dom";
import {FaExternalLinkAlt} from "react-icons/fa";

export interface ExtLinkLinkProps {
  readonly to: string;
  readonly children: string | React.JSX.Element | (string | React.JSX.Element)[];
}

export function ExtLink({ to, children }: ExtLinkLinkProps) {
  return (
    <Link to={to} className={styles.ExtLink} target={"_blank"}>
      {children}
      <FaExternalLinkAlt />
    </Link>
  );
}

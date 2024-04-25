import React from "react";
import styles from "./IntLink.module.scss";
import { Link } from "react-router-dom";

export interface IntLinkLinkProps {
  readonly to: string;
  readonly children: string | React.JSX.Element | (string | React.JSX.Element)[];
}

export function IntLink({ to, children }: IntLinkLinkProps) {
  return (
    <Link to={to} className={styles.IntLink} preventScrollReset={false}>
      {children}
    </Link>
  );
}

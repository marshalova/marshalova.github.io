import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

export interface HeaderLinkProps {
  readonly to: string;
  readonly children: string;
}

export function HeaderLink({ to, children }: HeaderLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.HeaderLink, { [styles.HeaderLinksActive]: isActive })
      }
    >
      {children}
    </NavLink>
  );
}

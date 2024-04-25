import { JSX } from "react";
import styles from "./WorkGallery.module.scss";

export interface WorkGalleryProps {
  readonly header: string;
  readonly children: JSX.Element[];
}

export function WorkGallery({ header, children }: WorkGalleryProps) {
  return (
    <div className={styles.WorkGallery}>
      <h2 className={styles.WorkGalleryHeader}>{header}</h2>
      <div className={styles.WorkGalleryBody}>{children}</div>
    </div>
  );
}

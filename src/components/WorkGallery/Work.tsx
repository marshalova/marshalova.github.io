import { Link } from "react-router-dom";
import styles from "./Work.module.scss";

export interface WorkProps {
  readonly title: string;
  readonly roles: string[];
  readonly link: string;
  readonly image: string;
}

export function Work({
  title,
  roles,
  link,
  image,
}: WorkProps) {
  return (
      <Link to={link} className={styles.Work}>
        <div className={styles.WorkTitle}>{title}</div>
        <div className={styles.WorkRoles}>
            <span className={styles.WorkRolesHeader}>role:</span> <span>{roles.join(", ")}</span>
        </div>
        <img className={styles.WorkPic} src={image} alt={title} />
      </Link>
  );
}

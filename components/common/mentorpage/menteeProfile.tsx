import styles from "./index.module.scss";

type Props = {
  name: string;
  age: number;
  location: string;
};

export default function MenteeProfile(props: Props) {
  return (
    <div className={styles.info}>
      <p className={styles.name}>{props.name}</p>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.span}>Age</span>
          {props.age}
        </li>

        <li className={styles.li}>
          <span className={styles.span}>Location</span>
          {props.location}
        </li>
      </ul>
    </div>
  );
}

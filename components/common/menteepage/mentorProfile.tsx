import styles from "./index.module.scss";

type Props = {
  name: string;
  age: number;
  location: string;
  description: string;
  rating: number;
};

export default function MentorProfile(props: Props) {
  return (
    <div className={styles.info}>
      <div className={styles.title}>
        <p className={styles.name}>{props.name}</p>
        <img
          className={styles.img}
          src="https://www.assesspeople.com/img/rating.png"
        />
        <p className={styles.rating}>({props.rating})</p>
      </div>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.span}>Age</span>
          {props.age}
        </li>

        <li className={styles.li}>
          <span className={styles.span}>Location</span>
          {props.location}
        </li>

        <li className={styles.li}>
          <span className={styles.span}>Description</span>
          <p className={styles.text}>{props.description}</p>
        </li>
      </ul>
    </div>
  );
}

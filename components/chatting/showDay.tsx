import styles from "./index.module.scss";

type Props = {
  day: string;
};

export default function ShowDay(props: Props) {
  return <div className={styles.day}>{props.day}</div>;
}

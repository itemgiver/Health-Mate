import MenteeProfile from "@components/common/mentorpage/menteeProfile";
import styles from "./index.module.scss";

type Props = {
  imgSrc: string;
  name: string;
  age: number;
  location: string;
  description: string;
};

export default function ShowMentee(props: Props) {
  return (
    <div>
      <div className={styles.basic}>
        <img
          alt="Mentee Image load failed."
          src={props.imgSrc}
          className={styles.image}
        ></img>

        <MenteeProfile
          name={props.name}
          age={props.age}
          location={props.location}
        ></MenteeProfile>
      </div>

      <div className={styles.description}>{props.description}</div>
    </div>
  );
}

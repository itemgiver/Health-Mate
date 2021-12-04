import MenteeProfile from "@components/common/mentorpage/menteeProfile";
import styles from "./index.module.scss";

type Props = {
  profile: any;
};

export default function MyMentee(props: Props) {
  return (
    <div>
      <div className={styles.basic}>
        <img
          alt="Mentee Image load failed."
          src={props.profile.imgSrc}
          className={styles.image}
        ></img>

        <MenteeProfile
          name={props.profile.name}
          age={props.profile.age}
          location={props.profile.location}
        ></MenteeProfile>
      </div>

      <div className={styles.description}>
        ●&nbsp;&nbsp;
        <p>{props.profile.description}</p>
      </div>
    </div>
  );
}

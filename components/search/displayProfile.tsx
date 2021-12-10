import styles from "./displayProfile.module.scss";
import useGetProfile from "@lib/utils/getprofile";

type Props = {
  userId: string;
};

export default function DisplayProfile(props: Props) {
  const [value, loading, error] = useGetProfile(props.userId);
  const flag = loading || error || !value || value.docs.length === 0;
  const profile = flag ? {} : value.docs[0].data();

  return (
    <>
      {flag ? (
        <div>loading</div>
      ) : (
        <div className={styles.container}>
          <img
            className={styles.img}
            src={profile.imgSrc}
            alt="profile image"
          ></img>
          <div className={styles.profile}>
            <div className={styles.name}>{profile.name}</div>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <span className={styles.span}>Age:</span> {profile.age}
              </li>
              <li className={styles.li}>
                <span className={styles.span}>Location:</span>{" "}
                {profile.location}
              </li>
              <li className={styles.li}>
                <span className={styles.span}>Description:</span>{" "}
                {profile.description}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

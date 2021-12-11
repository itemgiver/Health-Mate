import styles from "./displayProfile.module.scss";
import { useRouter } from "next/router";
import Paths from "@lib/paths";
import useGetProfile from "@lib/utils/getprofile";
import { stringify } from "qs";

type Props = {
  userId: string;
};

export default function DisplayProfile(props: Props) {
  const [value, loading, error] = useGetProfile(props.userId);
  const flag = loading || error || !value || value.docs.length === 0;
  const profile = flag ? {} : value.docs[0].data();

  const router = useRouter();
  const query = stringify({ userId: props.userId }, { addQueryPrefix: true });
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(Paths.CHATTING + query);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      {flag ? (
        <div>loading</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

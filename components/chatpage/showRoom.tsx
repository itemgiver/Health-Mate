import GetProfile from "@lib/utils/getprofile";
import Paths from "@lib/paths";
import PostLastTime from "@lib/utils/postLastTime";
import { useRouter } from "next/router";
import { FireStoreTimeStamp } from "@models/common";
import styles from "./index.module.scss";

type Props = {
  userId: string;
  friendId: string;
  lastChat: string;
  lastTime: string;
  unRead: number;
};

export default function ShowRoom(props: Props) {
  const [value, loading, error] = GetProfile(props.friendId);
  const router = useRouter();
  const href = Paths.CHATROOM;
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    PostLastTime(props.userId, props.friendId);
    router.push(href);
  };

  return (
    <div className={styles.rooms}>
      {(loading || error || !value || value.docs.length === 0) && (
        <div className={styles.room} />
      )}
      {!(loading || error || !value || value.docs.length === 0) && (
        <div className={styles.room} onClick={handleClick}>
          <div className={styles.left}>
            <img
              className={styles.img}
              src={value.docs[0].data().imgSrc}
              alt="Profile Image Load Failed."
            ></img>
          </div>
          <div className={styles.middle}>
            <div className={styles.name}>{value.docs[0].data().name}</div>
            <div className={styles.lastChat}>{props.lastChat}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.time}>{props.lastTime}</div>
            {props.unRead !== 0 && (
              <div className={styles.unRead}>{props.unRead}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

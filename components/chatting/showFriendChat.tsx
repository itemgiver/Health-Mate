import { Image } from "antd";
import { Chats } from "@components/chatting/chatMessage";
import GetMinute from "@lib/utils/getminute";
import styles from "./index.module.scss";

type Props = {
  chat: Chats;
  friend: any;
};

export default function showFriendChat(props: Props) {
  return (
    <div className={styles.friendChat}>
      <div>
        <Image
          className={styles.img}
          src={props.friend.imgSrc}
          alt="Friend Image Load Failed."
        />
      </div>
      <div className={styles.triangle} />
      <div className={styles.message}>
        <div className={styles.name}>{props.friend.name}</div>
        <div className={styles.flex}>
          <div className={styles.chat}>{props.chat.msg}</div>
          <div className={styles.time}>{GetMinute(props.chat.date)}</div>
        </div>
      </div>
    </div>
  );
}

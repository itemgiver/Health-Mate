import ShowRoom from "@components/chatpage/showRoom";
import { format } from "date-fns";
import styles from "./index.module.scss";

type Props = {
  userId: string;
  chatA: any;
  chatB: any;
};

export default function ShowRooms(props: Props) {
  const chatRooms: any[] = props.chatA.concat(props.chatB);

  chatRooms.sort((a: any, b: any) =>
    a.data()["time" + a.data().chatNum.toString()] <
    b.data()["time" + b.data().chatNum.toString()]
      ? 1
      : -1
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.text}>My Chats</p>
      </div>
      {chatRooms.map((chatRoom, idx) => {
        const friendId =
          chatRoom.data().personA === props.userId
            ? chatRoom.data().personB
            : chatRoom.data().personA;
        const lastChat =
          chatRoom.data().chatNum === 0
            ? "--- no message ---"
            : chatRoom.data()["chat" + chatRoom.data().chatNum.toString()];
        const lastDate =
          chatRoom.data()["time" + chatRoom.data().chatNum.toString()].seconds *
          1000;
        const lastDay = format(lastDate, "MM d, yyyy");
        const lastTime =
          lastDay === format(new Date(), "MM d, yyyy")
            ? format(lastDate, "h:mm a")
            : lastDay === format(new Date().getTime() - 86400000, "MM d, yyyy")
            ? "Yesterday"
            : format(lastDate, "MMMM d");
        const unRead =
          chatRoom.data().personA === props.userId
            ? chatRoom.data().unReadA
            : chatRoom.data().unReadB;

        return (
          <ShowRoom
            userId={props.userId}
            friendId={friendId}
            lastChat={lastChat}
            lastTime={lastTime}
            unRead={unRead}
            key={idx}
          />
        );
      })}
    </div>
  );
}

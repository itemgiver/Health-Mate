import ShowMyChat from "@components/chatting/showMyChat";
import ShowFriendChat from "@components/chatting/showFriendChat";
import ShowDay from "@components/chatting/showDay";
import { FireStoreTimeStamp } from "@models/common";
import { format } from "date-fns";
import styles from "./index.module.scss";

enum ChatType {
  MY = "my",
  YOU = "you",
}

type Props = {
  user: any;
  friend: any;
  chats: any;
};

type Message = {
  msg: string;
  date: FireStoreTimeStamp;
  type: ChatType;
  day: string;
  read: boolean;
};

export type Chats = {
  msg: string;
  date: FireStoreTimeStamp;
  type: ChatType;
};

export default function ChatMessage(props: Props) {
  const chats: Message[] = [];
  const lastTime =
    props.friend.userId === props.chats.personA
      ? props.chats.lastTimeA
      : props.chats.lastTimeB;

  for (let i = 1; i <= props.chats.chatNum; i++) {
    const chatId = props.chats["chat" + i.toString() + "Id"];
    const message = {
      msg: props.chats["chat" + i.toString()],
      date: props.chats["time" + i.toString()],
      type: props.user.userId === chatId ? ChatType.MY : ChatType.YOU,
      day: format(
        props.chats["time" + i.toString()].seconds * 1000,
        "EEEE, MMMM d, yyyy"
      ),
      read: lastTime.seconds >= props.chats["time" + i.toString()].seconds,
    };

    chats[props.chats.chatNum - i] = message;
  }

  return (
    <div className={styles.chats}>
      {chats.map((chat, idx) => {
        return (
          <div key={idx}>
            {(idx === chats.length - 1 || chats[idx + 1].day !== chat.day) && (
              <ShowDay day={chat.day} />
            )}
            {chat.type === ChatType.MY && (
              <ShowMyChat chat={chat} read={chat.read} />
            )}
            {chat.type === ChatType.YOU && (
              <ShowFriendChat chat={chat} friend={props.friend} />
            )}
          </div>
        );
      })}
    </div>
  );
}

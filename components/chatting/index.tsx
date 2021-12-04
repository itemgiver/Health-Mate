import React, { useState } from "react";
import { useRouter } from "next/router";
import Paths from "@lib/paths";
import {
  ArrowLeftOutlined,
  PlusSquareOutlined,
  SmileOutlined,
  NumberOutlined,
  RightSquareFilled,
} from "@ant-design/icons";
import { Input } from "antd";
import ChatMessage from "@components/chatting/chatMessage";
import PostMessage from "@lib/utils/postmessage";
import styles from "./index.module.scss";

const { TextArea } = Input;

type Props = {
  user: any;
  friend: any;
  chats: any;
};

export default function ChatRoom(props: Props) {
  const [message, setMessage] = useState("");

  const handleCircle = (e: React.MouseEvent<HTMLDivElement>) => {
    // TODO
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      PostMessage(
        props.user.userId,
        props.friend.userId,
        message,
        props.chats.chatNum,
        props.chats.unReadA,
        props.chats.unReadB
      );
      setMessage("");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    PostMessage(
      props.user.userId,
      props.friend.userId,
      message,
      props.chats.chatNum,
      props.chats.unReadA,
      props.chats.unReadB
    );
    setMessage("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.circle} onClick={handleCircle}>
          <ArrowLeftOutlined className={styles.icon} />
        </div>
        <p className={styles.text}>{props.friend.name}</p>
      </div>

      <ChatMessage
        user={props.user}
        friend={props.friend}
        chats={props.chats}
      />

      <div className={styles.footer}>
        <div className={styles.attach}>
          <PlusSquareOutlined className={styles.icon} />
        </div>

        <TextArea
          className={styles.input}
          value={message}
          onChange={handleChange}
          onKeyDown={handleEnter}
          autoFocus={true}
        />

        <div className={styles.emoticon}>
          <SmileOutlined className={styles.icon} />
        </div>
        {message !== "" && (
          <div className={styles.rightKey} onClick={handleClick}>
            <RightSquareFilled className={styles.icon} />
          </div>
        )}
        {message === "" && (
          <div className={styles.poundKey}>
            <NumberOutlined className={styles.icon} />
          </div>
        )}
      </div>
    </div>
  );
}

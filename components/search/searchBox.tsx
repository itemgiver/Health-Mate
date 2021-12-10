import styles from "./searchBox.module.scss";
import { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBox() {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      setMessage("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <div className={styles.searchIcon}>
          <SearchOutlined />
        </div>
        <Input
          className={styles.input}
          value={message}
          onChange={handleChange}
          onKeyDown={handleEnter}
          autoFocus={true}
        ></Input>
      </div>
    </div>
  );
}

import styles from "./searchBox.module.scss";
import { useState, useRef } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

type Props = {
  onChange: any;
};

export default function SearchBox(props: Props) {
  const [message, setMessage] = useState("");
  const [drop, setDrop] = useState("name");
  const dropRef = useRef<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleDrop = () => {
    setDrop(dropRef.current.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      if (props.onChange) {
        props.onChange(drop, message);
      }
      setMessage("");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <select ref={dropRef} style={{marginBottom: "10px", marginLeft: "5px",}} onChange={handleDrop}>
          <option value="name">이름</option>
          <option value="age">나이</option>
          <option value="location">지역</option>
          <option value="description">소개</option>
        </select>
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
    </>
  );
}

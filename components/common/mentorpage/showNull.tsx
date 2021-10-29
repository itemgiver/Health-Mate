import MenteeProfile from "@components/common/mentorpage/menteeProfile";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Image } from "antd";
import styles from "./index.module.scss";

type Props = {
  userId: string;
};

export default function ShowNull(props: Props) {
  return (
    <div className={styles.null}>
      <PlusSquareOutlined className={styles.icon} />
      <p className={styles.text}>Find New Mentee</p>
    </div>
  );
}

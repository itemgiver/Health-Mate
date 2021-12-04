import { useRouter } from "next/router";
import Paths from "@lib/paths";
import { Card } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";

export default function showNull() {
  const router = useRouter();
  const href = Paths.SEARCH;
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Card
      title="My Mentor"
      className={styles.mentor}
      headStyle={{
        height: "60px",
        paddingLeft: "32px",
        paddingBottom: "0",
        borderTop: "0",
        borderBottom: "2px solid #d9d9d9",
        backgroundColor: "#fffbe6",
        fontSize: "18px",
      }}
      bodyStyle={{ padding: "2.5px 0 0 30px" }}
    >
      <Card.Grid className={styles.nullCard} onClick={handleClick}>
        <div className={styles.null}>
          <PlusSquareOutlined className={styles.icon} />
          <p className={styles.text}>Find New Mentor</p>
        </div>
      </Card.Grid>
    </Card>
  );
}

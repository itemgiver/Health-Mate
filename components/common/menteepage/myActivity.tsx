import { Card } from "antd";
import styles from "./index.module.scss";

type Props = {
  images: string[];
};

export default function MyActivity(props: Props) {
  return (
    <Card
      title="My Activity"
      className={styles.container}
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
      {props.images.map((image, idx) => {
        return (
          <Card.Grid className={styles.myActivity} key={idx}>
            <img className={styles.img} src={image} />
          </Card.Grid>
        );
      })}
    </Card>
  );
}

import styles from "./searchResult.module.scss";
import { Card } from "antd";

export default function SearchResult() {
  const tmp = [1, 2, 3];

  return (
    <div className={styles.container}>
      <Card title="Search Result" className={styles.cards}>
        {tmp.map((data, idx) => {
          return (
            <Card.Grid className={styles.card} key={idx}>
              abc
            </Card.Grid>
          );
        })}
      </Card>
    </div>
  );
}

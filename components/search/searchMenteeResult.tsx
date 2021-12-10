import styles from "./searchMenteeResult.module.scss";
import DisplayProfile from "@components/search/displayProfile";
import { Card } from "antd";

export default function SearchMenteeResult() {
  const userIds = ["userid002", "userid003", "userid004"];

  return (
    <div className={styles.container}>
      <Card title="Search Result" className={styles.cards}>
        {userIds.map((userId, idx) => {
          return (
            <Card.Grid className={styles.card} key={idx}>
              <DisplayProfile userId={userId} />
            </Card.Grid>
          );
        })}
      </Card>
    </div>
  );
}

import styles from "./getResult.module.scss";
import { Card } from "antd";
import useSearchProfile from "@lib/utils/getprofile/search";
import DisplayProfile from "@components/search/displayProfile";
import { MemberType } from "@components/common/profile";

type Props = {
  keyword: string;
  memberType: MemberType;
};

export default function GetResult(props: Props) {
  const [value, loading, error] = useSearchProfile(props.keyword);
  const flag = loading || error || !value || value.docs.length === 0;
  const profile = flag ? {} : value.docs[0].data();

  const userIds =
    props.keyword === ""
      ? props.memberType === MemberType.MENTEE
        ? ["userid001", "userid004"]
        : ["userid002", "userid003", "userid005"]
      : flag
      ? []
      : [profile.userId];

  for (var i = userIds.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = userIds[i];
    userIds[i] = userIds[j];
    userIds[j] = temp;
  }

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

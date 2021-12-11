import styles from "./getResult.module.scss";
import { Card } from "antd";
import useSearchProfile from "@lib/utils/getprofile/search";
import DisplayProfile from "@components/search/displayProfile";
import { MemberType } from "@components/common/profile";
import useGetUserId from "@lib/utils/getuserId";
import { useState } from "react";

type Props = {
  userId: string;
  keyword: string;
  memberType: MemberType;
};

export default function GetResult(props: Props) {
  const [value, loading, error] = useSearchProfile(props.keyword);
  const flag = loading || error || !value || value.docs.length === 0;
  const profile = flag ? {} : value.docs[0].data();

  const [value2, loading2, error2] = useGetUserId(
    props.memberType === MemberType.MENTOR
      ? MemberType.MENTEE
      : MemberType.MENTOR
  );
  const flag2 = loading2 || error2 || !value2 || value2.docs.length === 0;

  const defaultIds = [];
  if (!flag2) {
    for (var i = 0; i < value2.docs.length; i++) {
      defaultIds.push(value2.docs[i].data().userId);
    }
  }

  const userIds =
    props.keyword === "" ? defaultIds : flag ? [] : [profile.userId];

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
              <DisplayProfile userId={userId} myId={props.userId} />
            </Card.Grid>
          );
        })}
      </Card>
    </div>
  );
}

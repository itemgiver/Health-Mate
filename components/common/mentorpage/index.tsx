import { useRouter } from "next/router";
import Paths from "@lib/paths";
import ShowNull from "@components/common/mentorpage/showNull";
import ShowMentee from "@components/common/mentorpage/showMentee";
import { MemberType } from "@components/common/profile";
import { Card } from "antd";
import GetMentees from "@lib/utils/getmentees";
import styles from "./index.module.scss";
import { stringify } from "qs";

type Props = {
  userId: string;
};

export default function MentorPage(props: Props) {
  const router = useRouter();
  const nullUser = { userId: "null", memberType: MemberType.NULL };
  const informations = [nullUser, nullUser, nullUser, nullUser];

  const [value, loading, error] = GetMentees(props.userId);
  if (!(loading || error || !value)) {
    for (let i = 0; i < value.docs.length; i++) {
      informations[i] = {
        userId: value.docs[i].data().menteeId,
        memberType: MemberType.MENTEE,
      };
    }
    informations[value.docs.length] = nullUser;
    if (value.docs.length % 2 == 0)
      informations[value.docs.length + 1] = nullUser;
  }

  return (
    <Card
      title="My Mentees"
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
      bodyStyle={{ padding: "2.5px 0 18px 30px" }}
    >
      {informations.map((menteeInfo, idx) => {
        const href =
          menteeInfo.memberType === MemberType.NULL
            ? Paths.SEARCH
            : Paths.CHATTING;
        const query = stringify(
          { userId: props.userId },
          { addQueryPrefix: true }
        );
        const handleClick = (e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          router.push(href + query);
        };

        return (
          <div key={idx}>
            {menteeInfo.memberType === MemberType.NULL && (
              <Card.Grid className={styles.nullCard} key={idx}>
                <div onClick={handleClick}>
                  <ShowNull userId={props.userId} />
                </div>
              </Card.Grid>
            )}

            {menteeInfo.memberType === MemberType.MENTEE && (
              <Card.Grid className={styles.menteeCard} key={idx}>
                <div onClick={handleClick}>
                  <ShowMentee userId={menteeInfo.userId} />
                </div>
              </Card.Grid>
            )}
          </div>
        );
      })}
    </Card>
  );
}

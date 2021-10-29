import { useRouter } from "next/router";
import Paths from "@lib/paths";
import ShowNull from "@components/common/mentorpage/showNull";
import ShowMentee from "@components/common/mentorpage/showMentee";
import { MemberType } from "@components/common/profile";
import { Card } from "antd";
import styles from "./index.module.scss";

type Props = {
  userId: string;
};

export default function MentorPage(props: Props) {
  // TODO construct Mentee information using props.userid
  const tmp: ProfileType = {
    userId: "userid000",
    imgSrc:
      "https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg",
    name: "Gyuho Suh",
    age: 25,
    location: "Seoul",
    description: "I like to exercise every day. I'm finding a new health mate.",
    memberType: MemberType.MENTEE,
  };
  const nouser: ProfileType = { memberType: MemberType.NULL };
  const informations: ProfileType[] = [tmp, tmp, tmp, nouser];

  const router = useRouter();

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
        const handleClick = (e) => {
          e.preventDefault();
          router.push(href);
        };

        return (
          <div>
            {menteeInfo.memberType === MemberType.NULL && (
              <Card.Grid
                className={styles.nullCard}
                onClick={handleClick}
                key={idx}
              >
                <ShowNull userId={props.userId}></ShowNull>
              </Card.Grid>
            )}

            {menteeInfo.memberType === MemberType.MENTEE && (
              <Card.Grid
                className={styles.menteeCard}
                onClick={handleClick}
                key={idx}
              >
                <ShowMentee
                  imgSrc={menteeInfo.imgSrc}
                  name={menteeInfo.name}
                  age={menteeInfo.age}
                  location={menteeInfo.location}
                  description={menteeInfo.description}
                ></ShowMentee>
              </Card.Grid>
            )}
          </div>
        );
      })}
    </Card>
  );
}

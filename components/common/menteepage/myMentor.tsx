import { useRouter } from "next/router";
import Paths from "@lib/paths";
import { Card } from "antd";
import MentorProfile from "@components/common/menteepage/mentorProfile";
import styles from "./index.module.scss";
import { stringify } from "qs";

type Props = {
  userId: string;
  imgSrc: string;
  name: string;
  age: number;
  location: string;
  description: string;
  rating: number;
};

export default function MyMentor(props: Props) {
  const router = useRouter();
  const href = Paths.CHATTING;
  const query = stringify({ userId: props.userId }, { addQueryPrefix: true });
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
      onClick={handleClick}
    >
      <Card.Grid className={styles.card}>
        <img className={styles.img} src={props.imgSrc} />
        <MentorProfile
          name={props.name}
          age={props.age}
          location={props.location}
          description={props.description}
          rating={props.rating}
        />
      </Card.Grid>
    </Card>
  );
}

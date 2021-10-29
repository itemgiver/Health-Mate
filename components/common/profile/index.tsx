import ProfileImage from "@components/common/profile/profileImage";
import {
  HeartOutlined,
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { ReactNode } from "react";
import styles from "./index.module.scss";

export enum MemberType {
  MENTOR = "mentor",
  MENTEE = "mentee",
  NULL = "null",
}

type Props = {
  imgSrc: string;
  description: string;
  memberType: MemberType;
};

type TagItem = {
  key: string;
  color: string;
  icon: ReactNode;
};

export default function Profile(props: Props) {
  const profileColor =
    props.memberType === MemberType.MENTOR ? "green" : "gray";

  const tagItems: TagItem[] = [
    { key: "11.7k Followers", color: "red", icon: <HeartOutlined /> },
    { key: "Facebook", color: "blue", icon: <FacebookOutlined /> },
    { key: "Instagram", color: "#F56040", icon: <InstagramOutlined /> },
    { key: "Youtube", color: "#CC0000", icon: <YoutubeOutlined /> },
  ];
  const myIcons: TagItem[] =
    props.memberType === MemberType.MENTOR ? tagItems : tagItems.slice(1, 3);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.text}>My Profile</p>
      </div>

      <div className={styles.rightBody}>
        <ProfileImage
          imgSrc={props.imgSrc}
          color={profileColor}
          memberType={props.memberType}
        />

        <div className={styles.profile}>
          <p className={styles.text}>{props.description}</p>

          <div className={styles.icons}>
            {myIcons.map((myIcon, idx) => {
              return (
                <Tag icon={myIcon.icon} color={myIcon.color} key={idx}>
                  {myIcon.key}
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

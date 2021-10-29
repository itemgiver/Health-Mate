import { Image, Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { MemberType } from "@components/common/profile/index";
import styles from "./index.module.scss";

type Props = {
  imgSrc: string;
  color: string;
  memberType: MemberType;
};

export default function ProfileImage(props: Props) {
  return (
    <div className={styles.leftBody}>
      <Image
        alt="Introduction image load failed."
        src={props.imgSrc}
        className={styles.image}
      />
      <figcaption className={styles.figCaption}>
        <Tag
          icon={<CheckCircleOutlined />}
          className={styles.memberType}
          color={props.color}
        >
          {props.memberType}
        </Tag>
      </figcaption>
    </div>
  );
}

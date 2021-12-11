import styles from "./index.module.scss";
import Link from "next/link";
import Paths from "@lib/paths";
import {
  HomeOutlined,
  SettingOutlined,
  SearchOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { stringify } from "qs";

export default function Footer() {
  const router = useRouter();
  const userId = router.query.hasOwnProperty("userId")
    ? (router.query.userId as string)
    : "";
  const query =
    userId === ""
      ? ""
      : stringify({ userId: userId }, { addQueryPrefix: true });

  return (
    <div className={styles.container}>
      <Link href={Paths.SEARCH + query}>
        <SearchOutlined />
      </Link>
      <Link href={Paths.HOME + query}>
        <HomeOutlined />
      </Link>
      <Link href={Paths.CHATTING + query}>
        <WechatOutlined />
      </Link>
      <Link href={Paths.SETTING + query}>
        <SettingOutlined />
      </Link>
    </div>
  );
}

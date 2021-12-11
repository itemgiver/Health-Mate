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

  const flags = [
    router.pathname === Paths.SEARCH,
    router.pathname === Paths.HOME,
    router.pathname === Paths.CHATTING,
    router.pathname === Paths.SETTING,
  ];
  const iconColor = "#5b8c00";

  return (
    <div className={styles.container}>
      <Link href={Paths.SEARCH + query}>
        <div className={styles.box}>
          <SearchOutlined style={{ color: flags[0] ? iconColor : "black" }} />
        </div>
      </Link>
      <Link href={Paths.HOME + query}>
        <div className={styles.box}>
          <HomeOutlined style={{ color: flags[1] ? iconColor : "black" }} />
        </div>
      </Link>
      <Link href={Paths.CHATTING + query}>
        <div className={styles.box}>
          <WechatOutlined style={{ color: flags[2] ? iconColor : "black" }} />
        </div>
      </Link>
      <Link href={Paths.SETTING + query}>
        <div className={styles.box}>
          <SettingOutlined style={{ color: flags[3] ? iconColor : "black" }} />
        </div>
      </Link>
    </div>
  );
}

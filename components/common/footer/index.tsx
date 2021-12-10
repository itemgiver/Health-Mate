import styles from "./index.module.scss";
import Link from "next/link";
import Paths from "@lib/paths";
import {
  HomeOutlined,
  SettingOutlined,
  SearchOutlined,
  WechatOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Link href={Paths.SEARCH}>
        <SearchOutlined />
      </Link>
      <Link href={Paths.SETTING}>
        <HomeOutlined />
      </Link>
      <Link href={Paths.CHATTING}>
        <WechatOutlined />
      </Link>
      <Link href={Paths.SETTING}>
        <SettingOutlined />
      </Link>
    </div>
  );
}

import styles from "./index.module.scss";
import { PropsWithChildren } from "react";
import { Layout } from "antd";
import Footer from "@components/common/footer";
import Header from "@components/common/header";

export default function Container({ children }: PropsWithChildren<{}>) {
  return (
    <div className={styles.container}>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content className={styles.scroll}>{children}</Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </div>
  );
}

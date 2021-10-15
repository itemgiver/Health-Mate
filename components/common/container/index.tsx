import styles from "./index.module.scss";
import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren<{}>) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
}

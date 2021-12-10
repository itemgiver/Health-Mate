import styles from "./index.module.scss";
import SearchBox from "@components/search/searchBox";
import SearchMenteeResult from "@components/search/searchMenteeResult";

type Props = {
  userId: string;
};

export default function SearchPage(props: Props) {
  return (
    <div className={styles.container}>
      <SearchBox />
      <SearchMenteeResult />
    </div>
  );
}

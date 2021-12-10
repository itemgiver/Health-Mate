import styles from "./index.module.scss";
import SearchBox from "@components/search/searchBox";
import SearchResult from "@components/search/searchResult";

type Props = {
  userId: string;
};

export default function SearchPage(props: Props) {
  return (
    <div className={styles.container}>
      <SearchBox />
      <SearchResult />
    </div>
  );
}

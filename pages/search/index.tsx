import type { NextPage } from "next";
import SearchPage from "@components/search";

const Search: NextPage = () => {
  const userId = "userid001";

  return <SearchPage userId={userId} />;
};

export default Search;

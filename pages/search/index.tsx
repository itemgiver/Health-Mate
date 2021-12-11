import type { NextPage } from "next";
import SearchPage from "@components/search";
import { useRouter } from "next/router";
import useGetProfile from "@lib/utils/getprofile";
import dynamic from "next/dynamic";
const GoogleLoginComp = dynamic(() => import("@components/google"), {
  ssr: false,
});

const Search: NextPage = () => {
  const router = useRouter();
  const userId = router.query.hasOwnProperty("userId")
    ? (router.query.userId as string)
    : "";
  const [value, loading, error] = useGetProfile(userId);
  const flag = loading || error || !value || value.docs.length === 0;

  return (
    <div>{flag ? <GoogleLoginComp /> : <SearchPage userId={userId} />}</div>
  );
};

export default Search;

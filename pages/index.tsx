import type { NextPage } from "next";
import { useRouter } from "next/router";
import useGetProfile from "@lib/utils/getprofile";
import HomePage from "@components/common/homepage";
import dynamic from "next/dynamic";
const GoogleLoginComp = dynamic(() => import("@components/google"), {
  ssr: false,
});

const Home: NextPage = () => {
  const router = useRouter();
  const userId = router.query.hasOwnProperty("userId")
    ? (router.query.userId as string)
    : "";
  const [value, loading, error] = useGetProfile(userId);
  const flag = loading || error || !value || value.docs.length === 0;

  return (
    <div>
      {flag ? <GoogleLoginComp /> : <HomePage profile={value.docs[0].data()} />}
    </div>
  );
};

export default Home;

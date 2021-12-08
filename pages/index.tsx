import type { NextPage } from "next";
import useGetProfile from "@lib/utils/getprofile";
import HomePage from "@components/common/homepage";
import dynamic from "next/dynamic";
const GoogleLoginComp = dynamic(() => import("@components/google"), {
  ssr: false,
});

const Home: NextPage = () => {

  return (
    <div>
      <GoogleLoginComp />

    </div>
  );
};

export default Home;

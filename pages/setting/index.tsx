import type { NextPage } from "next";
import SettingPage from "@components/setting";
import { useRouter } from "next/router";
import useGetProfile from "@lib/utils/getprofile";
import dynamic from "next/dynamic";
const GoogleLoginComp = dynamic(() => import("@components/google"), {
  ssr: false,
});

const Setting: NextPage = () => {
  const router = useRouter();
  const userId = router.query.hasOwnProperty("userId")
    ? (router.query.userId as string)
    : "";
  const [value, loading, error] = useGetProfile(userId);
  const flag = loading || error || !value || value.docs.length === 0;

  return (
    <div>{flag ? <GoogleLoginComp /> : <SettingPage userId={userId} />}</div>
  );
};

export default Setting;

import type { NextPage } from "next";
import UserProfile from "@components/setting/user-profile";
import HomePage from "@components/common/homepage";
import useGetProfile from "@lib/utils/getprofile";

const Setting: NextPage = () => {
  const [value, loading, error] = useGetProfile("userid001");
  return (
    <div>
      {(loading || error || !value || value.docs.length === 0) && <div></div>}
      {!(loading || error || !value || value.docs.length === 0) && (
        <HomePage profile={value.docs[0].data()} />
      )}
      setting page should be implemented
      <UserProfile />
    </div>
  );
};

export default Setting;

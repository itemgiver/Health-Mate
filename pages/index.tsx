import type { NextPage } from "next";
import GetProfile from "@lib/utils/getprofile";
import HomePage from "@components/common/homepage";

const Home: NextPage = () => {
  const [value, loading, error] = GetProfile("userid001");
  return (
    <div>
      {(loading || error || !value || value.docs.length === 0) && <div></div>}
      {!(loading || error || !value || value.docs.length === 0) && (
        <HomePage profile={value.docs[0].data()} />
      )}
    </div>
  );
};

export default Home;

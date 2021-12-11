import type { NextPage } from "next";
import UserProfile from "@components/setting/user-profile";
import HomePage from "@components/common/homepage";
import useGetProfile from "@lib/utils/getprofile";
import React, { Fragment } from "react";

const Setting: NextPage = () => {
  const userId = "userid001";
  const [value, loading, error] = useGetProfile(userId);
  //
  return (
    <div>
      {(loading || error || !value || value.docs.length === 0) && <div></div>}
      {!(loading || error || !value || value.docs.length === 0) && (
        <Fragment>
          <HomePage profile={value.docs[0].data()} />
          <UserProfile id = {userId} value = {value}/>
        </Fragment>
      )}
      
    </div>
  );
};

export default Setting;

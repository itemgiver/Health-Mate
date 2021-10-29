import type { NextPage } from "next";
import Profile, { MemberType } from "@components/common/profile";
import MentorPage from "@components/common/mentorpage";
import MenteePage from "@components/common/menteepage";

const Home: NextPage = () => {
  const userId = "userid007";
  // toggle memberType
  const memberType = MemberType.MENTEE;
  const imgSrc =
    memberType === MemberType.MENTOR
      ? "https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png"
      : "https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg";
  const description =
    "Hello, World! I'm a mentor. My name is ABC. OOOOO AAAAAAAAAAAAAAAaa";

  const homepage =
    memberType === MemberType.MENTOR ? (
      <MentorPage userId={userId}></MentorPage>
    ) : (
      <MenteePage userId={userId}></MenteePage>
    );

  return (
    <div>
      <Profile
        imgSrc={imgSrc}
        description={description}
        memberType={memberType}
      ></Profile>
      {homepage}
    </div>
  );
};

export default Home;

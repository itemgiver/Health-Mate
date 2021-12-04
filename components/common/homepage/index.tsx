import Profile, { MemberType } from "@components/common/profile";
import MentorPage from "@components/common/mentorpage";
import MenteePage from "@components/common/menteepage";

type Props = {
  profile: any;
};

export default function HomePage(props: Props) {
  const homepage =
    props.profile.memberType === MemberType.MENTOR ? (
      <MentorPage userId={props.profile.userId}></MentorPage>
    ) : (
      <MenteePage userId={props.profile.userId}></MenteePage>
    );

  return (
    <div>
      <Profile
        imgSrc={props.profile.imgSrc}
        name={props.profile.name}
        description={props.profile.description}
        memberType={props.profile.memberType}
      ></Profile>
      {homepage}
    </div>
  );
}

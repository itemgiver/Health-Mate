import MyMentee from "@components/common/mentorpage/myMentee";
import useGetProfile from "@lib/utils/getprofile";

type Props = {
  userId: string;
};

export default function ShowMentee(props: Props) {
  const [value, loading, error] = useGetProfile(props.userId);

  return (
    <div>
      {(loading || error || !value || value.docs.length === 0) && <div></div>}
      {!(loading || error || !value || value.docs.length === 0) && (
        <MyMentee profile={value.docs[0].data()} />
      )}
    </div>
  );
}

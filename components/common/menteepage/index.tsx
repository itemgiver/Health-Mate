import GetMentor from "@lib/utils/getmentor";
import ShowNull from "@components/common/menteepage/showNull";
import MentorData from "@components/common/menteepage/mentorData";

type Props = {
  userId: string;
};

export default function MenteePage(props: Props) {
  const [value, loading, error] = GetMentor(props.userId);

  return (
    <div>
      {(loading || error || !value || value.docs.length === 0) && <ShowNull />}
      {!(loading || error || !value || value.docs.length === 0) && (
        <MentorData mentorId={value.docs[0].data().mentorId} />
      )}
    </div>
  );
}

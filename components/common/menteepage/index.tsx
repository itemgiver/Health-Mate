import GetMentor from "@lib/utils/getmentor";
import ShowNull from "@components/common/menteepage/showNull";
import MentorData from "@components/common/menteepage/mentorData";
import MyActivity from "@components/common/menteepage/myActivity";

type Props = {
  userId: string;
};

export default function MenteePage(props: Props) {
  const activityImages: string[] = [
    "https://drive.google.com/uc?export=view&id=12uAF4UehDxntFV8ddu59rjpp9dpa3A_5",
    "https://drive.google.com/uc?export=view&id=19nXgPxLB_yI6JPq6VKyd3m2DvpgAtMjC",
  ];
  const [value, loading, error] = GetMentor(props.userId);

  return (
    <div>
      {(loading || error || !value || value.docs.length === 0) && (
        <div>
          <ShowNull userId={props.userId} />
          <MyActivity images={activityImages} />
        </div>
      )}
      {!(loading || error || !value || value.docs.length === 0) && (
        <MentorData
          userId={props.userId}
          mentorId={value.docs[0].data().mentorId}
        />
      )}
    </div>
  );
}

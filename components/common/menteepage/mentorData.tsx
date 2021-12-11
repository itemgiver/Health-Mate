import useGetProfile from "@lib/utils/getprofile";
import ShowNull from "@components/common/menteepage/showNull";
import MyActivity from "@components/common/menteepage/myActivity";
import ShowMentor from "@components/common/menteepage/showMentor";

type Props = {
  userId: string;
  mentorId: string;
};

export default function MentorData(props: Props) {
  const activityImages: string[] = [
    "https://drive.google.com/uc?export=view&id=12uAF4UehDxntFV8ddu59rjpp9dpa3A_5",
    "https://drive.google.com/uc?export=view&id=19nXgPxLB_yI6JPq6VKyd3m2DvpgAtMjC",
  ];

  const [value, loading, error] = useGetProfile(props.mentorId);
  return (
    <div>
      {(loading || error || !value || value.docs.length === 0) && (
        <div>
          <ShowNull userId={props.userId} />
          <MyActivity images={activityImages} />
        </div>
      )}
      {!(loading || error || !value || value.docs.length === 0) && (
        <ShowMentor
          myId={props.userId}
          profile={value.docs[0].data()}
          images={activityImages}
        />
      )}
    </div>
  );
}

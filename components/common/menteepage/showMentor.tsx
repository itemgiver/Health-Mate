import MyMentor from "@components/common/menteepage/myMentor";
import MyActivity from "@components/common/menteepage/myActivity";

type Props = {
  myId: string;
  profile: any;
  images: string[];
};

export default function ShowMentor(props: Props) {
  return (
    <div>
      <MyMentor
        myId={props.myId}
        userId={props.profile.userId}
        imgSrc={props.profile.imgSrc}
        name={props.profile.name}
        age={props.profile.age}
        location={props.profile.location}
        description={props.profile.description}
        rating={props.profile.rating}
      />
      <MyActivity images={props.images} />
    </div>
  );
}

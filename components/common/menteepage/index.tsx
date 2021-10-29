import MyActivity from "@components/common/menteepage/myActivity";
import MyMentor from "@components/common/menteepage/myMentor";

type Props = {
  userId: string;
};

export default function MenteePage(props: Props) {
  const imgSrc =
    "https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png";
  const name = "HealthKing";
  const age = 30;
  const location = "Yuseong, Daejeon, South Korea";
  const description =
    "Hello, I'm a health king who enjoy health. In the morning, I jog every day.";

  const activityImages: string[] = [
    "https://drive.google.com/uc?export=view&id=12uAF4UehDxntFV8ddu59rjpp9dpa3A_5",
    "https://drive.google.com/uc?export=view&id=19nXgPxLB_yI6JPq6VKyd3m2DvpgAtMjC",
  ];

  return (
    <div>
      <MyMentor
        imgSrc={imgSrc}
        name={name}
        age={age}
        location={location}
        description={description}
      />
      <MyActivity images={activityImages} />
    </div>
  );
}

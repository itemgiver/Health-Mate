import GetRoomA from "@lib/utils/getroomA";
import GetRoomB from "@lib/utils/getroomB";
import ShowRooms from "@components/chatpage/showRooms";

type Props = {
  userId: string;
};

export default function ChatPage(props: Props) {
  const emptyDict: any[] = [];
  const [valueA, loadingA, errorA] = GetRoomA(props.userId);
  const flagA = loadingA || errorA || !valueA || valueA.docs.length === 0;
  const [valueB, loadingB, errorB] = GetRoomB(props.userId);
  const flagB = loadingB || errorB || !valueB || valueB.docs.length === 0;

  return (
    <div>
      {flagA && flagB && (
        <ShowRooms userId={props.userId} chatA={emptyDict} chatB={emptyDict} />
      )}
      {flagA && !flagB && (
        <ShowRooms
          userId={props.userId}
          chatA={emptyDict}
          chatB={valueB.docs}
        />
      )}
      {!flagA && flagB && (
        <ShowRooms
          userId={props.userId}
          chatA={valueA.docs}
          chatB={emptyDict}
        />
      )}
      {!flagA && !flagB && (
        <ShowRooms
          userId={props.userId}
          chatA={valueA.docs}
          chatB={valueB.docs}
        />
      )}
    </div>
  );
}

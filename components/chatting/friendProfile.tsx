import GetProfile from "@lib/utils/getprofile";
import ChatData from "@components/chatting/chatData";

type Props = {
  user: any;
  friendId: string;
};

export default function FriendProfile(props: Props) {
  const [value, loading, error] = GetProfile(props.friendId);

  return (
    <div>
      {(loading || error || !value || value.docs.length == 0) && <div></div>}
      {!(loading || error || !value || value.docs.length == 0) && (
        <ChatData user={props.user} friend={value.docs[0].data()} />
      )}
    </div>
  );

  return <div>{typeof props.user}</div>;
}

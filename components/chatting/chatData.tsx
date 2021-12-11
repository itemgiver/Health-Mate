import GetChatting from "@lib/utils/getchatting";
import Chatting from "@components/chatting";

type Props = {
  user: any;
  friend: any;
};

export default function ChatData(props: Props) {
  const [value, loading, error] = GetChatting(
    props.user.userId,
    props.friend.userId
  );

  return (
    <div>
      {(loading || error || !value || value.docs.length == 0) && (
        <div>Invalid friend Id</div>
      )}
      {!(loading || error || !value || value.docs.length == 0) && (
        <Chatting
          user={props.user}
          friend={props.friend}
          chats={value.docs[0].data()}
        />
      )}
    </div>
  );
}

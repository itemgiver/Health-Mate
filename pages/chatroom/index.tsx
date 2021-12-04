import type { NextPage } from "next";
import GetProfile from "@lib/utils/getprofile";
import FriendProfile from "@components/chatting/friendProfile";

const ChatRoom: NextPage = () => {
  const userId = "userid001";
  const friendId = "userid002";
  const [value, loading, error] = GetProfile(userId);

  return (
    <div>
      {(loading || error || !value || value.docs.length === 0) && <div></div>}
      {!(loading || error || !value || value.docs.length === 0) && (
        <FriendProfile user={value.docs[0].data()} friendId={friendId} />
      )}
    </div>
  );
};

export default ChatRoom;

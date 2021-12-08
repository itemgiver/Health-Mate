import type { NextPage } from "next";
import useGetProfile from "@lib/utils/getprofile";
import FriendProfile from "@components/chatting/friendProfile";
import { useRouter } from "next/router";

const ChatRoom: NextPage = () => {
  const router = useRouter();

  const userId = (router.query.userid as string) ?? "";
  const friendId = (router.query.friendid as string) ?? "";

  const [value, loading, error] = useGetProfile(userId);

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

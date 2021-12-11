import type { NextPage } from "next";
import useGetProfile from "@lib/utils/getprofile";
import FriendProfile from "@components/chatting/friendProfile";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const GoogleLoginComp = dynamic(() => import("@components/google"), {
  ssr: false,
});

const ChatRoom: NextPage = () => {
  const router = useRouter();

  const userId = (router.query.userId as string) ?? "";
  const friendId = (router.query.friendId as string) ?? "";

  const [value, loading, error] = useGetProfile(userId);
  const flag = loading || error || !value || value.docs.length === 0;

  return (
    <div>
      {flag ? (
        <GoogleLoginComp />
      ) : (
        <FriendProfile user={value.docs[0].data()} friendId={friendId} />
      )}
    </div>
  );
};

export default ChatRoom;

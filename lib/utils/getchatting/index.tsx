import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";
import { useCollection } from "react-firebase-hooks/firestore";

export default function GetChatting(userId: string, friendId: string) {
  if (userId > friendId) {
    const tmp = userId;
    userId = friendId;
    friendId = tmp;
  }

  return useCollection(
    firebase
      .firestore()
      .collection(CollectionName.CHATS)
      .where("personA", "==", userId)
      .where("personB", "==", friendId)
      .limit(1),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
}

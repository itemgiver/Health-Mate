import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";
import { useCollection } from "react-firebase-hooks/firestore";

export default function GetRoomA(userId: string) {
  return useCollection(
    firebase
      .firestore()
      .collection(CollectionName.CHATS)
      .where("personA", "==", userId),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
}

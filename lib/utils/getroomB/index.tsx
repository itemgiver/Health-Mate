import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";
import { useCollection } from "react-firebase-hooks/firestore";

export default function GetRoomB(userId: string) {
  return useCollection(
    firebase
      .firestore()
      .collection(CollectionName.CHATS)
      .where("personB", "==", userId),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
}

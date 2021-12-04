import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";
import { useCollection } from "react-firebase-hooks/firestore";

export default function GetProfile(userId: string) {
  return useCollection(
    firebase
      .firestore()
      .collection(CollectionName.PROFILE)
      .where("userId", "==", userId)
      .limit(1),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
}

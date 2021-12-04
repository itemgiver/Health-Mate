import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";
import { useCollection } from "react-firebase-hooks/firestore";

export default function GetMentor(menteeId: string) {
  return useCollection(
    firebase
      .firestore()
      .collection(CollectionName.RELATIONSHIP)
      .where("menteeId", "==", menteeId)
      .limit(1),
    {
      snapshotListenOptions: {
        includeMetadataChanges: true,
      },
    }
  );
}

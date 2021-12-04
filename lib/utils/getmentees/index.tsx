import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";
import { useCollection } from "react-firebase-hooks/firestore";

export default function GetMentees(mentorId: string) {
  return useCollection(
    firebase
      .firestore()
      .collection(CollectionName.RELATIONSHIP)
      .where("mentorId", "==", mentorId),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
}

import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";
import { useCollection } from "react-firebase-hooks/firestore";

export default function useSearchProfile(keyword: string) {
  return useCollection(
    firebase
      .firestore()
      .collection(CollectionName.PROFILE)
      .where("name", "==", keyword)
      .limit(1),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
}

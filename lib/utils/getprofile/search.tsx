import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";
import { useCollection } from "react-firebase-hooks/firestore";

export default function useSearchProfile(category: string, keyword: string) {
  let key: any = category == "age" ? Number(keyword) : keyword;
  return useCollection(
    firebase
      .firestore()
      .collection(CollectionName.PROFILE)
      .where(category, "==", key)
      .limit(1),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
}

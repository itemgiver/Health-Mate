import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";
import { useCollection } from "react-firebase-hooks/firestore";
import { MemberType } from "@components/common/profile";

export default function useGetUserId(memberType: MemberType) {
  return useCollection(
    firebase
      .firestore()
      .collection(CollectionName.PROFILE)
      .where("memberType", "==", memberType)
      .limit(3),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
}

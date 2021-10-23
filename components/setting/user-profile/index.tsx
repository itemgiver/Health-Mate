import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import type Profile from "@models/profile";
import CollectionName from "@lib/firebase/collections";

export default function UserProfile() {
  const [value, loading, error] = useCollection<Profile>(
    firebase
      .firestore()
      .collection(CollectionName.PROFILE)
      .where("name", "==", "jayden")
      .limit(1),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!value) return null;

  const profile = value.docs[0].data();

  return (
    <div>
      {profile && (
        <div>
          <p>이름 : {profile.name}</p>
          <p>나이 : {profile.age}</p>
        </div>
      )}
    </div>
  );
}

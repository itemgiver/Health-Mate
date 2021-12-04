import { useCollection } from "react-firebase-hooks/firestore";
import GetProfile from "@lib/utils/getprofile";

export default function UserProfile() {
  const [value, loading, error] = GetProfile("userid001");
  if (loading || error || !value || value.docs.length == 0) return <div></div>;

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

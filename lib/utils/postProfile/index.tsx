import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";

export default async function PostProfile(userId: string, modifyNum: number, text: string) {
  console.log(modifyNum, text);
  const targetProfile = await firebase
    .firestore()
    .collection(CollectionName.PROFILE)
    .where("userId", "==", userId)
    .limit(1)
    .get();
  const profilePathId = targetProfile.docs[0].id;
  const profileRef = await firebase
    .firestore()
    .collection(CollectionName.PROFILE)
    .doc(profilePathId);
  switch (modifyNum) {
    case 0:
      profileRef.update({imgSrc: text})
      break;
    case 1:
      profileRef.update({name: text})
      break;
    case 2:
      profileRef.update({age: Number(text)})
      break;
    case 3:
      profileRef.update({location: text})
      break;
    case 4:
      profileRef.update({description: text})
      break;
  }
}

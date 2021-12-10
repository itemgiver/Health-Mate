import firebase from "firebase";
import CollectionName from "@lib/firebase/collections";

type Body = {
  name: string;
  age: string;
  intro: string;
  memberType: string;
  imgSrc: string;
  userId: string;
};

export default async function createUserProfile(body: Body) {
  await firebase.firestore().collection(CollectionName.PROFILE).add({
    body,
  });
}

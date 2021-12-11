import firebase from "firebase";
import CollectionName from "@lib/firebase/collections";

type Body = {
  name: string;
  age: number;
  description: string;
  memberType: string;
  imgSrc: string;
  userId: string;
};

export default async function createUserProfile(body: Body) {
  await firebase.firestore().collection(CollectionName.PROFILE).add({
    name: body.name,
    age: body.age,
    description: body.description,
    memberType: body.memberType,
    imgSrc: body.imgSrc,
    userId: body.userId,
  });
}

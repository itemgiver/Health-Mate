import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";

export default async function PostLastTime(userId: string, friendId: string) {
  const targetChat1 = await firebase
    .firestore()
    .collection(CollectionName.CHATS)
    .where("personA", "==", userId)
    .where("personB", "==", friendId)
    .limit(1)
    .get();

  const targetChat2 = await firebase
    .firestore()
    .collection(CollectionName.CHATS)
    .where("personA", "==", friendId)
    .where("personB", "==", userId)
    .limit(1)
    .get();

  const chatPathId =
    targetChat1.docs.length === 0
      ? targetChat2.docs[0].id
      : targetChat1.docs[0].id;

  const chatRef = await firebase
    .firestore()
    .collection(CollectionName.CHATS)
    .doc(chatPathId);

  if (targetChat1.docs.length === 0) {
    chatRef.update({
      lastTimeB: new Date(),
      unReadB: 0,
    });
  } else {
    chatRef.update({
      lastTimeA: new Date(),
      unReadA: 0,
    });
  }
}

import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";

export default async function PostMessage(
  userId: string,
  friendId: string,
  message: string,
  chatNum: number = 0,
  unReadA: number,
  unReadB: number
) {
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
      [`chat${chatNum + 1}`]: message,
      [`time${chatNum + 1}`]: new Date(),
      [`chat${chatNum + 1}Id`]: userId,
      chatNum: chatNum + 1,
      unReadA: unReadA + 1,
    });
  } else {
    chatRef.update({
      [`chat${chatNum + 1}`]: message,
      [`time${chatNum + 1}`]: new Date(),
      [`chat${chatNum + 1}Id`]: userId,
      chatNum: chatNum + 1,
      unReadB: unReadB + 1,
    });
  }
}

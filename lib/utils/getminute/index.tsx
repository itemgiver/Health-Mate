import { format } from "date-fns";
import { FireStoreTimeStamp } from "@models/common";

export default function GetMinute(date: FireStoreTimeStamp) {
  return format(new Date(date.seconds * 1000), "h:mm a");
}

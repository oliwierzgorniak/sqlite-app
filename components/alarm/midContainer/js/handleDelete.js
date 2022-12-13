import store from "../../../../redux/store";
import { removeAlarm } from "../../../../redux/reducers/alarmsReducer";
import Database from "../../../../db/Database";

export default async function handleDelete(id) {
  store.dispatch(removeAlarm(id));
  await Database.remove(id);
}

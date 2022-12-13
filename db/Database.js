import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("./zgorniak_oliwier_4I1B.db");

async function queryDb(query) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (tx, results) => resolve(results.rows._array),
        (tx, error) => reject(error)
      );
    });
  });
}

export default class Database {
  static async createTable() {
    const query =
      "CREATE TABLE IF NOT EXISTS alarms (id integer primary key not null, time text, isEnabled integer);";
    await queryDb(query);
  }

  static async add(time, isEnabled) {
    const query = `INSERT INTO alarms (time, isEnabled) values ('${time}', ${isEnabled});`;
    await queryDb(query);
  }

  static async getAll() {
    const query = "SELECT * FROM alarms";
    const result = await queryDb(query);
    return result;
  }

  static async remove(id) {
    const query = `DELETE FROM alarms WHERE (id = ${id});`;
    await queryDb(query);
  }

  static async update(modifiedAlarm) {
    const id = modifiedAlarm.id;
    const time = modifiedAlarm.time;
    const isEnabled = modifiedAlarm.isEnabled;
    const query = `UPDATE alarms SET time = '${time}', isEnabled=${isEnabled} WHERE id = '${id}';`;
    await queryDb(query);
  }
}

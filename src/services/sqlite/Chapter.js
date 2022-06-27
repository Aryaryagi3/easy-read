import db from "./SQLiteDatabase";

db.transaction((tx) => {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS chapters (id INTEGER PRIMARY KEY AUTOINCREMENT, chapter_name TEXT, content TEXT, volume TEXT, book_id INTEGER, FOREIGN KEY (book_id) REFERENCES books (id));"
    );
});

const create = (obj) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO chapters (chapter_name, content, volume, book_id) values (?, ?, ?, ?);",
                [obj.chapter_name, obj.content, obj.volume, obj.book_id],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) resolve(insertId);
                    else reject("Error inserting obj: " + JSON.stringify(obj));
                },
                (_, error) => reject(error)
            );
        });
    });
};

const update = (id, obj) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE chapters SET chapter_name=?, content=?, volume=? WHERE id=?;",
                [obj.chapter_name, obj.content, obj.volume, id],
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) resolve(rowsAffected);
                    else reject("Error updating obj: id=" + id);
                },
                (_, error) => reject(error)
            );
        });
    });
};

const find = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM chapters WHERE id=?;",
                [id],
                (_, { rows }) => {
                    if (rows.length > 0) resolve(rows._array[0]);
                    else reject("Obj not found: id=" + id);
                },
                (_, error) => reject(error)
            );
        });
    });
};

const findByBook = (book_id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM chapters WHERE book_id=?;",
                [book_id],
                (_, { rows }) => {
                    if (rows.length > 0) resolve(rows._array);
                    else reject("Obj not found: brand=" + book_id);
                },
                (_, error) => reject(error)
            );
        });
    });
};

const countByBook = (book_id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT COUNT(*) FROM chapters WHERE book_id=?;",
                [book_id],
                (_, { rows }) => {
                    if (rows.length > 0) resolve(rows._array);
                    else reject("Obj not found: brand=" + book_id);
                },
                (_, error) => reject(error)
            );
        });
    });
};

const remove = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM chapters WHERE id=?;",
                [id],
                (_, { rowsAffected }) => {
                    resolve(rowsAffected);
                },
                (_, error) => reject(error)
            );
        });
    });
};

const removeAll = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM chapters WHERE book_id=?;",
                [id],
                (_, { rowsAffected }) => {
                    resolve(rowsAffected);
                },
                (_, error) => reject(error)
            );
        });
    });
};

export default {
    create,
    update,
    find,
    findByBook,
    countByBook,
    remove,
    removeAll
};
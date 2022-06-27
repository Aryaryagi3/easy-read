import db from "./SQLiteDatabase";

db.transaction((tx) => {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, genre TEXT);"
    );
});

const create = (obj) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO books (title, author, genre) values (?, ?, ?);",
                [obj.title, obj.author, obj.genre],
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
                "UPDATE books SET title=?, author=?, genre=? WHERE id=?;",
                [obj.title, obj.author, obj.genre, id],
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
                "SELECT * FROM books WHERE id=?;",
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

const findByTitle = (title) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM books WHERE title LIKE ?;",
                [title],
                (_, { rows }) => {
                    if (rows.length > 0) resolve(rows._array);
                    else reject("Obj not found: brand=" + title);
                },
                (_, error) => reject(error)
            );
        });
    });
};

const findByAuthor = (author) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM books WHERE author LIKE ?;",
                [title],
                (_, { rows }) => {
                    if (rows.length > 0) resolve(rows._array);
                    else reject("Obj not found: brand=" + author);
                },
                (_, error) => reject(error)
            );
        });
    });
};

const all = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM books;",
                [],
                (_, { rows }) => resolve(rows._array),
                (_, error) => reject(error)
            );
        });
    });
};

const remove = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM books WHERE id=?;",
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
    findByTitle,
    findByAuthor,
    all,
    remove,
};
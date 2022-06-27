import * as SQLite from "expo-sqlite";

import Chapter from "../services/sqlite/Chapter";
import Book from "../services/sqlite/Book";

const config = {
    database: "mydatabase",
    driver: SQLite,
    entities: [Chapter, Book],
    synchronize: true,
    type: "expo",
};

export default config;
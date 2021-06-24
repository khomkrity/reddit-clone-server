"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
const config = {
    migrations: {
        tableName: 'mikro_orm_migrations',
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
        transactional: true,
        disableForeignKeys: true,
        allOrNothing: true,
        dropTables: true,
        safe: false,
        emit: 'ts',
    },
    entities: [Post_1.Post],
    dbName: 'reddit',
    password: constants_1.CONFIG.PASSWORD,
    type: 'postgresql',
    debug: !constants_1.CONFIG.PROD,
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map
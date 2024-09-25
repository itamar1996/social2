"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(username, password, email, birtdate, avatarUrl) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.birtdate = birtdate;
        this.avatarUrl = avatarUrl;
        this.folowers = [];
        this.folowing = [];
        this.isLockedAccount = false;
        this.id = (0, uuid_1.v4)();
    }
}
exports.default = User;

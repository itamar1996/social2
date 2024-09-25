"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Post {
    constructor(authorId, content, heshtags, ref) {
        this.authorId = authorId;
        this.content = content;
        this.heshtags = heshtags;
        this.ref = ref;
        this.likesBy = [];
        this.createdAt = new Date();
        this.id = (0, uuid_1.v4)();
    }
}
exports.default = Post;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const filleDataLayer_1 = require("../config/filleDataLayer");
const post_1 = __importDefault(require("../models/post"));
const userService_1 = require("./userService");
class PostService {
    static createNewPost(newPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorId, content, heshtags, ref } = newPost;
            const post = new post_1.default(authorId, content, heshtags, ref);
            let posts = (yield (0, filleDataLayer_1.getFilleData)("posts"));
            if (!posts)
                posts = [];
            posts.push(post);
            (0, filleDataLayer_1.saveFilleData)("posts", posts);
        });
    }
    static GetAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            let posts = (yield (0, filleDataLayer_1.getFilleData)("posts"));
            if (!posts)
                posts = [];
            return posts;
        });
    }
    static searchPostsByHeshtag(heshtag) {
        return __awaiter(this, void 0, void 0, function* () {
            let posts = (yield (0, filleDataLayer_1.getFilleData)("posts"));
            posts = posts.filter((po) => po.heshtags.includes(`#${heshtag}`));
            if (!posts)
                posts = [];
            return posts;
        });
    }
    static searchPostsById(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            let posts = (yield (0, filleDataLayer_1.getFilleData)("posts"));
            const post = posts.find(p => p.id === postId);
            return post || null;
        });
    }
    static addLike(userId, postId) {
        return __awaiter(this, void 0, void 0, function* () {
            let posts = (yield (0, filleDataLayer_1.getFilleData)("posts"));
            const post = posts.find(p => p.id === postId);
            const user = yield userService_1.UserService.findUser(userId);
            if (!user || !post) {
                return false;
            }
            if (post.likesBy.includes(userId)) {
                return false;
            }
            post === null || post === void 0 ? void 0 : post.likesBy.push(userId);
            (0, filleDataLayer_1.saveFilleData)("posts", posts);
            return true;
        });
    }
}
exports.PostService = PostService;

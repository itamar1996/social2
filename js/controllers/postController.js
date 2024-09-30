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
const express_1 = __importDefault(require("express"));
const postServices_1 = require("../services/postServices");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield postServices_1.PostService.GetAllPosts();
        if (!data) {
            res.status(400).json({
                err: true,
                message: 'falling to get posts',
                data: null
            });
        }
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: data
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = postServices_1.PostService.createNewPost(req.body);
        if (!result) {
            res.status(400).json({
                err: true,
                message: 'post not post',
                data: null
            });
        }
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        });
    }
}));
router.get('/search/:heshtag', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const heshtag = req.params.heshtag;
        const posts = yield postServices_1.PostService.searchPostsByHeshtag(heshtag);
        if (!posts || posts.length === 0) {
            // אם לא נמצאו פוסטים
            res.status(404).json({
                err: true,
                message: 'No posts found for this hashtag',
                data: null
            });
            return; // הפסקת המשך הקוד
        }
        res.status(200).json({
            err: false,
            message: 'Posts found',
            data: posts
        });
    }
    catch (err) {
        res.status(500).json({
            err: true,
            message: 'Server error while searching for posts',
            data: null
        });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postServices_1.PostService.searchPostsById(req.params.id);
        if (!post) {
            res.status(404).json({
                err: true,
                message: 'Post not found',
                data: null
            });
            return;
        }
        res.status(200).json({
            err: false,
            message: 'Post found',
            data: post
        });
    }
    catch (err) {
        res.status(500).json({
            err: true,
            message: 'Server error while searching for post',
            data: null
        });
    }
}));
router.patch('/like', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, postId } = req.body;
        const result = yield postServices_1.PostService.addLike(userId, postId);
        console.log("res", result);
        if (!result) {
            res.status(400).json({
                err: true,
                message: 'user or post not found',
                data: null
            });
            return;
        }
        res.status(200).json({
            err: false,
            message: 'I was way too lazy to change the default message',
            data: postId
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        });
    }
}));
exports.default = router;

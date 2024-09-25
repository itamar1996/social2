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
const userService_1 = require("../services/userService");
const router = express_1.default.Router();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.headers);
        console.log(req.method);
        console.log(req.body);
        const result = yield userService_1.UserService.createNewUser(req.body);
        res.status(200).json({
            err: false,
            message: 'user created',
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
router.post('/follow', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { followerId, followingId } = req.body;
        const result = yield userService_1.UserService.folow(followerId, followingId);
        if (result) {
            res.status(200).json({
                err: false,
                message: 'folow',
                data: undefined
            });
        }
        else {
            res.status(400).json({
                err: true,
                message: 'I was way too lazy to change the default message',
                data: null
            });
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        });
    }
}));
//  ?key=value
router.get('/search/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield userService_1.UserService.findUser(userId);
        if (user) {
            res.status(200).json({
                err: false,
                message: 'user found',
                data: undefined
            });
        }
        else {
            res.status(400).json({
                err: true,
                message: 'user not found',
                data: null
            });
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        });
    }
}));
// ?type=MINE|ELSE
router.get('/profile/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield userService_1.UserService.findUser(userId);
        if (user) {
            res.status(200).json({
                err: false,
                message: 'user found',
                data: user
            });
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        });
    }
}));
// ?type=MINE|ELSE
router.get('/followers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield userService_1.UserService.findUser(userId);
        if (user) {
            res.status(200).json({
                err: false,
                message: 'user found',
                data: user.folowers
            });
        }
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'I was way too lazy to change the default message',
            data: null
        });
    }
}));
// ?type=MINE|ELSE
router.get('/following/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield userService_1.UserService.findUser(userId);
        if (user) {
            res.status(200).json({
                err: false,
                message: 'user found',
                data: user.folowing
            });
        }
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

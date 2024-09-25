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
exports.UserService = void 0;
const user_1 = __importDefault(require("../models/user"));
const filleDataLayer_1 = require("../config/filleDataLayer");
class UserService {
    static createNewUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password, email, birtdate, avatarUrl } = newUser;
            const user = new user_1.default(username, password, email, birtdate, avatarUrl);
            let users = yield (0, filleDataLayer_1.getFilleData)('users');
            if (!users)
                users = [];
            users.push(user);
            (0, filleDataLayer_1.saveFilleData)('users', users);
        });
    }
    static findUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield (0, filleDataLayer_1.getFilleData)('users');
            let user = users.find(u => u.id == userId);
            console.log(userId);
            if (user) {
                return user;
            }
            return user;
        });
    }
    static folow(followerId, followingId) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield (0, filleDataLayer_1.getFilleData)('users');
            let follower = users.find(u => u.id == followerId);
            const following = users.find(u => u.id == followingId);
            if (!follower || !following) {
                return false;
            }
            if (follower.folowing.includes(followingId)) {
                console.log("כבר עוקב");
                return false;
            }
            following.folowers.push(followerId);
            follower.folowing.push(followingId);
            (0, filleDataLayer_1.saveFilleData)("users", users);
            return true;
        });
    }
}
exports.UserService = UserService;

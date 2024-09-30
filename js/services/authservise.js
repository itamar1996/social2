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
const filleDataLayer_1 = require("../config/filleDataLayer");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    static login(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = userData;
            const users = yield (0, filleDataLayer_1.getFilleData)('users');
            if (!users)
                throw new Error("500: No users at all was found in the system");
            const user = users.find(u => u.username == username);
            if (!user)
                throw new Error("401: No user with that username");
            // HASH THE F PASSWORDDDDDD
            if (user.password != password)
                throw new Error("403: Wrong passwod");
            const payload = {
                username,
                id: user.id,
                avatarUrl: user.avatarUrl,
                email: user.email,
                isLockedAccount: user.isLockedAccount
            };
            return jsonwebtoken_1.default.sign(payload, process.env.TOKEN_SECRET, {
                expiresIn: "10m"
            });
        });
    }
}
exports.default = AuthService;
// DO YOU REMEMBER DataTransferObject?!

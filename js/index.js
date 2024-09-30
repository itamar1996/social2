"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authController_1 = __importDefault(require("./controllers/authController"));
const userController_1 = __importDefault(require("./controllers/userController"));
const postController_1 = __importDefault(require("./controllers/postController"));
// load enviroment variables
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/auth', authController_1.default);
app.use('/user', userController_1.default);
app.use('/post', postController_1.default);
app.listen(process.env.PORT, () => console.log(`See you at http::localhost:${process.env.PORT}`));

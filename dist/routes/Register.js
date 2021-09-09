"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyRouter = exports.router = void 0;
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
exports.router = express_1.default.Router();
exports.propertyRouter = exports.router;
exports.router.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    let user = await User_1.default.findOne({ email });
    if (user) {
        return res.send("This email has been taken.");
    }
    const salt = await bcryptjs_1.default.genSalt(10);
    const hashedPassword = await bcryptjs_1.default.hash(password, salt);
    user = new User_1.default({ name, email, password: hashedPassword });
    user.save();
    return res.send(user);
});
//# sourceMappingURL=Register.js.map
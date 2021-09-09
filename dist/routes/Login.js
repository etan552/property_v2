"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const router = express_1.default.Router();
exports.loginRouter = router;
router.post("/", async (req, res) => {
    const { email, password } = req.body;
    const user = await User_1.default.findOne({ email });
    if (!user) {
        return res.status(404).send({
            field: "email",
            message: "Invalid email or password",
        });
    }
    const isValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isValid) {
        return res.status(404).send({
            field: "password",
            message: "Invalid email or password",
        });
    }
    return res.send(user);
});
//# sourceMappingURL=Login.js.map
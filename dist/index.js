"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const Login_1 = require("./routes/Login");
const Register_1 = require("./routes/Register");
async function main() {
    try {
        await (0, mongoose_1.connect)("mongodb://localhost:27017/property");
        console.log("Connecting to db...");
    }
    catch (ex) {
        console.error("Db connectin failed n/", ex);
    }
}
main();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/property", Register_1.propertyRouter);
app.use("/api/login", Login_1.loginRouter);
const port = 3001;
app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
});
//# sourceMappingURL=index.js.map
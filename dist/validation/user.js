"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const validateUser = (user) => {
    if (!user.email.includes("@")) {
        return { field: "email", message: "Invalid email" };
    }
    return null;
};
exports.validateUser = validateUser;
//# sourceMappingURL=user.js.map
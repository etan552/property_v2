"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: {
        state: { type: String, required: true },
        city: { type: String, required: true },
        street: { type: String, required: true },
    },
    price: { type: Number, required: true },
});
const PropertyModel = (0, mongoose_1.model)("Property", schema);
exports.Property = PropertyModel;
//# sourceMappingURL=Property.js.map
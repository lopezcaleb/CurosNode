"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const v1_1 = __importDefault(require("./routes/v1"));
const app = (0, express_1.default)();
const port = 5000;
app.use((0, body_parser_1.urlencoded)({ extended: false }));
app.use((0, body_parser_1.json)());
(0, v1_1.default)(app);
app.use((req, res) => {
    res.status(404).send("Not Found");
});
app.listen(port, () => {
    console.log('Running in ' + port);
});

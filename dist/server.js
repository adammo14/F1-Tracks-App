"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const PORT = 1234;
app.use("*", (req, res) => {
    res.sendFile(path_1.default.resolve('index.html'));
});
app.listen(PORT, () => console.log(`hosting @${PORT}`));
//# sourceMappingURL=server.js.map
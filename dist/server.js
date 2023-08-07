"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const middlewares_1 = require("./middlewares");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
(0, routes_1.default)(app);
app.use(middlewares_1.boomErrorHandler);
app.use(middlewares_1.errorHandler);
app.listen(port, () => {
    console.log(`⚡️[server]: http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map
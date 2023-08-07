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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const services_1 = require("../services");
const middlewares_1 = require("../middlewares");
const schemas_1 = require("../schemas");
const service = new services_1.ProductService();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { offset = 0, limit = 10 } = req.query;
    const products = yield service.find(offset, limit);
    res.send(products);
}));
router.get('/:id', (0, middlewares_1.validatorHandler)(schemas_1.getProductSchema, 'params'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const products = yield service.findOne(id);
    res.send(products);
}));
router.post('/', (0, middlewares_1.validatorHandler)(schemas_1.createProductSchema, 'body'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const product = yield service.create(body);
        res.json(product);
    }
    catch (error) {
        next(error);
    }
}));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { id } = req.params;
    const products = yield service.update(id, body);
    res.send(products);
}));
router.delete('/:id', (0, middlewares_1.validatorHandler)(schemas_1.getProductSchema, 'params'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const products = yield service.delete(id);
        res.send(products);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=products.router.js.map
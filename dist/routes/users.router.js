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
const service = new services_1.UserService();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { offset = '0', limit = '10' } = req.query;
    const categories = yield service.find(offset, limit);
    res.send(categories);
}));
// router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   const categories = await service.findOne(id)
//   res.send(categories)
// })
// router.post('/', async (req, res) => {
//   const body = req.body
//   const categories = await service.create(body)
//   res.send(categories)
// })
// router.patch('/:id', async (req, res) => {
//   const body = req.body
//   const { id } = req.params
//   const categories = await service.update(id, body)
//   res.send(categories)
// })
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params
//   const categories = await service.delete(id)
//   res.send(categories)
// })
exports.default = router;
//# sourceMappingURL=users.router.js.map
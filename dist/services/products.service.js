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
const boom_1 = __importDefault(require("@hapi/boom"));
class ProductService {
    constructor() {
        this.products = [
            {
                id: 1,
                name: 'producto1',
                price: 1000,
            },
            {
                id: 2,
                name: 'producto2',
                price: 2000,
            },
            {
                id: 3,
                name: 'producto3',
                price: 1000,
            },
            {
                id: 4,
                name: 'producto4',
                price: 2000,
            },
        ];
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.products.length + 1;
            this.products.push(Object.assign(Object.assign({}, body), { id: id }));
            return this.products.find(item => item.id === id, 10);
        });
    }
    find(offset, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const start = offset;
            const end = offset == 0 ? limit : offset * limit + 1;
            return this.products.slice(start, end);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = this.products.find(item => item.id === parseInt(id, 10));
            if (!product) {
                return boom_1.default.notFound();
            }
            return product;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.products.findIndex(item => item.id === parseInt(id, 10));
            if (index !== -1) {
                this.products[index] = Object.assign(Object.assign({}, this.products[index]), body);
                return { message: 'Delete', id: id };
            }
            return { message: 'Not Found' };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.products.findIndex(item => item.id === parseInt(id, 10));
            if (index === -1) {
                return boom_1.default.notFound();
            }
            this.products.splice(index, 1);
            return { message: 'Delete', id: id };
        });
    }
}
exports.default = ProductService;
//# sourceMappingURL=products.service.js.map
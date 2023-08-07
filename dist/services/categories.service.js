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
Object.defineProperty(exports, "__esModule", { value: true });
class CategoryService {
    constructor() {
        this.categories = [
            {
                id: 1,
                name: 'tech',
            },
            {
                id: 2,
                name: 'groseries',
            },
        ];
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.categories.length + 1;
            this.categories.push(Object.assign(Object.assign({}, body), { id: id }));
            return this.categories.find(item => item.id === id, 10);
        });
    }
    find(offset, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const start = offset;
            const end = offset == 0 ? limit : offset * limit + 1;
            return this.categories.slice(start, end);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.categories.findIndex(item => item.id === parseInt(id, 10));
            if (index !== -1) {
                return this.categories.find(item => item.id === parseInt(id, 10));
            }
            return { message: 'Not Found' };
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.categories.findIndex(item => item.id === parseInt(id, 10));
            if (index !== -1) {
                this.categories[index] = Object.assign(Object.assign({}, this.categories[index]), body);
                return { message: 'Delete', id: id };
            }
            return { message: 'Not Found' };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.categories.findIndex(item => item.id === parseInt(id, 10));
            if (index !== -1) {
                this.categories.splice(index, 1);
                return { message: 'Delete', id: id };
            }
            return { message: 'Not Found' };
        });
    }
}
exports.default = CategoryService;
//# sourceMappingURL=categories.service.js.map
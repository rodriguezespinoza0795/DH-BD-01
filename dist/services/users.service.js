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
const sequelize_1 = require("../libs/sequelize");
class UserService {
    // async create(body: { name: string }) {
    //   const id = this.categories.length + 1
    //   this.categories.push({ ...body, id: id })
    //   return this.categories.find(item => item.id === id, 10)
    // }
    find(offset, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const rta = yield sequelize_1.sequelize.models.User.findAll({
                offset: parseInt(offset, 10),
                limit: parseInt(limit, 10),
            });
            return rta;
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=users.service.js.map
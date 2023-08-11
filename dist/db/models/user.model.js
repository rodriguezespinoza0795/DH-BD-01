"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = exports.USER_TABLE = void 0;
const sequelize_1 = require("sequelize");
const USER_TABLE = 'users';
exports.USER_TABLE = USER_TABLE;
const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: 'create_at',
        defaultValue: sequelize_1.DataTypes.NOW,
    },
};
exports.UserSchema = UserSchema;
class User extends sequelize_1.Model {
    static associate() {
        // associate
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false,
        };
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map
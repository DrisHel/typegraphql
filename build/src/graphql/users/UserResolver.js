"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolvers = void 0;
const type_graphql_1 = require("type-graphql");
const user_1 = require("../../../src/services/user/user");
const UserImput_1 = require("./UserImput");
const UserOutput_1 = require("./UserOutput");
let UserResolvers = class UserResolvers {
    helloWord() {
        return " teste ";
    }
    ativo() {
        return true;
    }
    async getAllUser() {
        try {
            return await (0, user_1.getAllUser)();
        }
        catch (error) {
            console.log(error);
        }
    }
    async createUser(data) {
        await (0, user_1.createUser)(data);
        return true;
    }
    async updateUser(data) {
        try {
            await (0, user_1.updateUser)(data);
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteUser(id) {
        try {
            return await (0, user_1.deleteUser)(id);
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolvers.prototype, "helloWord", null);
__decorate([
    (0, type_graphql_1.Query)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolvers.prototype, "ativo", null);
__decorate([
    (0, type_graphql_1.Query)(() => [UserOutput_1.UserOutput], {
        description: "Mostrar todos os usuários."
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "getAllUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('data', () => UserImput_1.CreateUserInput, { description: "dados para criar usuário." })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserImput_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { description: " Feito alteração de usuário." }),
    __param(0, (0, type_graphql_1.Arg)("data", () => UserImput_1.UpdateUserInput, { description: " Alteração realizada com sucesso." })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserImput_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "updateUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Number, { description: " Remove usuário." }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID, { description: "Removido usuário." })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolvers.prototype, "deleteUser", null);
UserResolvers = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolvers);
exports.UserResolvers = UserResolvers;

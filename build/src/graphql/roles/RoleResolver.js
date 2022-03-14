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
exports.RoleResolvers = void 0;
const type_graphql_1 = require("type-graphql");
const role_1 = require("../../services/role/role");
const RoleInput_1 = require("./RoleInput");
const RoleOutput_1 = require("./RoleOutput");
let RoleResolvers = class RoleResolvers {
    ativo() {
        return true;
    }
    async getAllRole() {
        try {
            return await (0, role_1.getAllRole)();
        }
        catch (error) {
            console.log(error);
        }
    }
    async createRole(data) {
        await (0, role_1.createRole)(data);
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleResolvers.prototype, "ativo", null);
__decorate([
    (0, type_graphql_1.Query)(() => [RoleOutput_1.RoleOutput], {
        description: "Mostra todas as funções."
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleResolvers.prototype, "getAllRole", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('data', () => RoleInput_1.CreateRoleInput, { description: "Criar função." })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoleInput_1.CreateRoleInput]),
    __metadata("design:returntype", Promise)
], RoleResolvers.prototype, "createRole", null);
RoleResolvers = __decorate([
    (0, type_graphql_1.Resolver)()
], RoleResolvers);
exports.RoleResolvers = RoleResolvers;

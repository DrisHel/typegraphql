import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { createRole, getAllRole, updateRole,deleteRole } from "../../services/role/role";
import { CreateRoleInput, UpdateRoleInput } from "./RoleInput";
import { RoleOutput } from "./RoleOutput";
@Resolver()
export class RoleResolvers{

    @Query(() => Boolean)
    ativo(){
        return true;
    }

    @Query(() => [RoleOutput],{
        description: "Mostra todas as funções."
    })
    async getAllRole(){
        try {
            return await getAllRole()
        } catch (error) {
            console.log(error)
        }
    }

    @Mutation(() =>Boolean)
    async createRole(
        @Arg('data', () => CreateRoleInput, {description: "Criar função."})
        data:CreateRoleInput
    ){
        await createRole(data)
        return true;
    }

    @Mutation(()=>Boolean, {
        description:"Atualizada função do usuário."
    })
    async updateRole(
        @Arg("data", () => UpdateRoleInput, {
            description:"alteração realizada com sucesso."
        })
        data:UpdateRoleInput
    ){
        try {
            await updateRole(data)
            return true
        } catch (error) {
            console.log(error)
        }
    }

    @Mutation(() => Number, { description: " Remove função."})
    async deleteRole(
        @Arg("id", () => ID, { description: "Removido função."})
        id:number
    )
    {
        try {
          return await deleteRole(id)
        } catch (error) {
            console.log(error)
        }
    }
} 
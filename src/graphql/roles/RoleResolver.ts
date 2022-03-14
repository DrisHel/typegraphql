import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { createRole, getAllRole } from "../../services/role/role";
import { CreateRoleInput } from "./RoleInput";
import { RoleOutput } from "./RoleOutput"


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
} 
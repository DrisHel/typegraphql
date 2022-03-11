import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({description:"Lista todos os usuários:"})
export class UserOutput{
    @Field({
        description:"Nome do Usuário!"
    })
    name: string

    @Field({
        description:"Email do Usuário!"
    })
    email: string

    @Field(()=>ID,{
       description: "Identificador do usuário." 
    })
    id:number
   
}

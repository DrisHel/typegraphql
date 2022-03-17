import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({description:"Lista todos as funções:"})
export class RoleOutput{
    @Field({
        description:"Nome da função!"
    })
    name: string

    @Field(()=>Boolean,{
        description:"Situação da função"
    })
    active: boolean

    @Field(()=>ID,{
       description: "Identificador da função." 
    })
    id:number
   
}

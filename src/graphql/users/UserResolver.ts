import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { createUser, getAllUser, updateUser , deleteUser} from "../../services/user/user";
import { CreateUserInput, UpdateUserInput } from "./UserImput";
import { UserOutput } from "./UserOutput";



@Resolver()
export class UserResolvers{
@Query(() => String)
 helloWord(){
    return " teste ";
    }

    @Query(() => Boolean)
    ativo(){
        return true;

    }

    @Query(()=>[UserOutput],{
        description:"Mostrar todos os usuários."
    })
   async getAllUser(){
       try {
           return await getAllUser()
       } catch (error) {
           console.log(error);
       }
   }

    @Mutation(() => Boolean)
    async createUser(
    @Arg('data', () => CreateUserInput,{ description:"dados para criar usuário."} )
        data:CreateUserInput
    ){
        await createUser(data)
        return true;
    }
    

    @Mutation(() => Boolean, { description: " Feito alteração de usuário."})
    async updateUser(
        @Arg("data",()=> UpdateUserInput, { description:" Alteração realizada com sucesso."})
        data:UpdateUserInput
    )
    {
        try {
            await updateUser(data)
            return true
        } catch (error) {
            console.log(error)
        }
    }

    @Mutation(() => Number, { description: " Remove usuário."})
    async deleteUser(
        @Arg("id", () => ID, { description: "Removido usuário."})
        id:number
    )
    {
        try {
          return await deleteUser(id)
        } catch (error) {
            console.log(error)
        }
    }


}  


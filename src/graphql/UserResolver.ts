import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { createUser } from "../services/user/user";


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

    @Mutation(() => Boolean)
    async createUser(
        @Arg('name', () => String )
        name:string,

        @Arg('email',() => String)
        email:string,
    ){
        await createUser(name,email)
        return true;
    }
    

}  


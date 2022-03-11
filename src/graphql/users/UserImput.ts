import { Field, ID,InputType } from "type-graphql";


@InputType()
export class CreateUserInput {
    @Field()
    name: String

    @Field()
    email: String
}

@InputType()
export class UpdateUserInput extends CreateUserInput {
    @Field(() => ID, {description:" Alteração do usuário."})
    id:number

}
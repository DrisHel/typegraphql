import { Field, ID,InputType } from "type-graphql";
import { CreateRoleInput } from "../roles/RoleInput";


@InputType()
export class CreateUserInput {
    @Field()
    name: String

    @Field()
    email: String

    @Field(() => [CreateRoleInput])
    roles:Array<CreateRoleInput>
}

@InputType()
export class UpdateUserInput extends CreateUserInput {
    @Field(() => ID, {description:" Alteração do usuário."})
    id:number

}
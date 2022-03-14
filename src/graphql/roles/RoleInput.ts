import { Field, ID, InputType} from "type-graphql";

@InputType()
export class CreateRoleInput{
    @Field()
    name: String

    @Field()
    active: Boolean
}

@InputType()
export class UpdateRoleInput extends CreateRoleInput{
    @Field(() => ID, {description: "Alteração da função."})
    id:number
}
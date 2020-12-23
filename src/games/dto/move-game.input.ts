import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MoveGameInput {
    @Field(() => [String])
    readonly Move: string[];
}
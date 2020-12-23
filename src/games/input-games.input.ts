import { InputType, Field } from 'type-graphql';

@InputType()
export class GameInput {
    @Field()
    readonly GameName: string;
    @Field(() => [[String]])
    readonly GameHistory: string[][];
}
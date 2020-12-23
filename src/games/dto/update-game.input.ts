import { CreateGameInput } from './create-game.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateGameInput extends PartialType(CreateGameInput) {
  @Field(() => ID)
  id?: string;
  @Field()
  readonly GameName?: string;
  @Field(() => [[String]])
  readonly GameHistory: string[][];
}

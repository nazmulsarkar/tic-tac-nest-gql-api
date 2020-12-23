import { InputType, Field, ID } from '@nestjs/graphql';
import { isNullableType } from 'graphql';

@InputType()
export class CreateGameInput {
  @Field(() => ID)
  id?: string;
  @Field()
  readonly GameName: string;
  @Field(() => [[String]])
  readonly GameHistory: any[][];
}

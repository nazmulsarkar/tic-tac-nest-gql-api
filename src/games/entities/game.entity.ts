import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Game {
  @Field(() => ID)
  id: string;
  @Field()
  GameName: string;
  GameHistory: string[][];
}

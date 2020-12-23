import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GamesService } from './games.service';
import { Game } from './entities/game.entity';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';

@Resolver(() => Game)
export class GamesResolver {
  constructor (private readonly gamesService: GamesService) { }

  @Mutation(() => Game)
  async createGame(@Args('createGameInput') createGameInput: CreateGameInput): Promise<CreateGameInput> {
    return this.gamesService.create(createGameInput);
  }

  @Query(() => [Game], { name: 'games' })
  async games(): Promise<CreateGameInput[]> {
    return this.gamesService.findAll();
  }

  @Query(() => Game, { name: 'game' })
  async findGame(@Args('id', { type: () => String }) id: string): Promise<CreateGameInput> {
    return this.gamesService.findOne(id);
  }

  @Mutation(() => Game)
  async updateGame(
    @Args('id') id: string,
    @Args('updateGameInput') updateGameInput: UpdateGameInput
  ): Promise<UpdateGameInput> {
    return this.gamesService.update(id, updateGameInput);
  }

  @Mutation(() => Game)
  async removeGame(@Args('id', { type: () => String }) id: string): Promise<CreateGameInput> {
    return this.gamesService.remove(id);
  }
}

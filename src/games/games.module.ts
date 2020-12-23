import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesResolver } from './games.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesSchema } from './games.schema';

@Module({
  providers: [GamesResolver, GamesService],
  imports: [
    MongooseModule.forFeature([{ name: 'Game', schema: GamesSchema }])
  ]
})
export class GamesModule { }

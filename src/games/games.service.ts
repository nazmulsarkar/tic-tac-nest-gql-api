import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { Game } from './interfaces/game.interface';

@Injectable()
export class GamesService {
  constructor (@InjectModel('Game') private gameModel: Model<Game>) { }
  async create(createGameInput: CreateGameInput): Promise<CreateGameInput> {
    const createdGame = new this.gameModel(createGameInput);
    return await createdGame.save();
  }

  async findAll(): Promise<CreateGameInput[]> {
    return await this.gameModel.find().exec();
  }

  async findOne(id: string): Promise<CreateGameInput> {
    return await this.gameModel.findOne({ _id: id });
  }

  async update(id: string, updateGameInput: UpdateGameInput): Promise<CreateGameInput> {
    return await this.gameModel.findByIdAndUpdate(id, updateGameInput, { new: true });
  }

  async remove(id: string): Promise<CreateGameInput> {
    return await this.gameModel.findByIdAndRemove(id);
  }
}

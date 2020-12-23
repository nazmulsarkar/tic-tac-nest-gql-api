import * as mongoose from 'mongoose';

export const GamesSchema = new mongoose.Schema({
    GameName: String,
    GameHistory: [[String]]
});
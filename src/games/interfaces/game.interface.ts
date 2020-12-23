import { Document } from 'mongoose';

export interface Game extends Document {
    readonly GameName: string;
    readonly GameHistory: string[][];
}
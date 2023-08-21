import { MaxLength, MinLength } from 'class-validator';
import { MessagesHelper } from '../helpers/messages.helper';

export class ScoreDto {
    @MinLength(2, {message: MessagesHelper.INVALID_NAME})
    nome:string;

    @MinLength(1,{message: MessagesHelper.INVALID_SCORE1})
    @MaxLength(1,{message: MessagesHelper.INVALID_SCORE1})
    eixo1:number;

    @MinLength(1,{message: MessagesHelper.INVALID_SCORE2})
    @MaxLength(1,{message: MessagesHelper.INVALID_SCORE2})
    eixo2:number;

    @MinLength(1,{message: MessagesHelper.INVALID_SCORE3})
    @MaxLength(1,{message: MessagesHelper.INVALID_SCORE3})
    eixo3:number;
}
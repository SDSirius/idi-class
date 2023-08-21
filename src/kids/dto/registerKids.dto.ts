import {IsEmail, MinLength, MaxLength, Length, IsDate } from 'class-validator'
 import { MessagesHelper } from '../helpers/messages.helper';

export class RegisterKidsDto {
    @MinLength(2, {message: MessagesHelper.INVALID_NAME})
    nome:string;

    @MinLength(11,{message: MessagesHelper.INVALID_SCORE3})
    @MaxLength(11,{message: MessagesHelper.INVALID_SCORE3})
    telefone:number;

    @IsDate()
    nascimento:number;
}
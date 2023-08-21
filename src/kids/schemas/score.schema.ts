import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ScoreDocument = HydratedDocument<Score>;

@Schema()
export class Score {
    @Prop({required: true})
    nme:string;

    @Prop({required: true})
    eixo1:number;

    @Prop({required: true})
    eixo2:number;

    @Prop({required: true})
    eixo3:number;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
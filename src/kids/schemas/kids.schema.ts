import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type KidsDocument = HydratedDocument<Kids>;

@Schema()
export class Kids {
    @Prop({required: true})
    nome:string;

    @Prop({required: true})
    telefone:number;

    @Prop({required: true})
    nascimento:number;

}

export const KidsSchema = SchemaFactory.createForClass(Kids);
import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Kids, KidsDocument } from './schemas/kids.schema';
import { RegisterKidsDto } from './dto/registerKids.dto';


@Injectable()
export class KidsService {
    constructor(@InjectModel(Kids.name) private kidsModel: Model<KidsDocument>) {}

    async create(dto: RegisterKidsDto): Promise<Kids> {
        
        const kidsClass = new this.kidsModel(dto);
        return kidsClass.save();
    }
}

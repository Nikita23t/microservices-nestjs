import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum Roles {
    ADMIN = 'ADMIN',
    STUDENT = 'STUDENT',
    TEACHER = 'TEACHER',
}

@Schema({ timestamps: true })
export class User {
    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop()
    specialization: string;

    @Prop()
    about: string;

    @Prop({ enum: Roles, default: Roles.STUDENT })
    role: Roles;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    passwordHash: string;

    @Prop()
    refreshToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

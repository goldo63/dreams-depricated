import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import isEmail from 'validator/lib/isEmail';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({default: uuid, index: true})
  id: string;

  @Prop({
    required: true,
    unique: true,
  })
  username: string;

  @Prop({
    required: true,
  })
  firstname: string;
  @Prop({
    required: true,
  })
  lastname: string;

  @Prop({
    required: true,
    // validate: {
    //   validator: isEmail,
    //   message: 'should be a valid email address',
    // }
  })
  emailAddress: string;

  @Prop({
    required: false,
  })
  phonenumber?: string; 

  // @Prop({
  //   default: [],
  //   type: [MongooseSchema.Types.ObjectId],
  //   // cannot use Meetup.name here, as it leads to a circular dependency
  //   ref: 'Meetup',
  // })
  // meetups: Meetup[];
}

export const UserSchema = SchemaFactory.createForClass(User);

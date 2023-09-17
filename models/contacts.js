import { Schema, model } from 'mongoose';
import { handlleSaveError, runValidateAtupdate } from './hooks.js';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactsSchema.pre('findOneAndUpdate', runValidateAtupdate);
contactsSchema.post('findOneAndUpdate', handlleSaveError);
contactsSchema.post('save', handlleSaveError);

const Contact = model('contact', contactsSchema);

export default Contact;

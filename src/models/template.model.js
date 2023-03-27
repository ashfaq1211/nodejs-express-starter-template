import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const templateSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  templateEnum: {
    type: String,
    enum: ['Android', 'IOS']
  }
},
  {
    timestamps: true
  });

const TemplateModel = model('TemplateModel', templateSchema)
export default TemplateModel
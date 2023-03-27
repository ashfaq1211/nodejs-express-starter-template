import mongoose from 'mongoose';
import { dbUri } from '../config/index.js';

export default async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(dbUri)
    .then(() => {
      console.log('Database Connected');
    })
    .catch(err => {
      console.log('Database Connection Error')
      console.log(err);
    });
};
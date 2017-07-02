import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
  prop1: String,
  prop2: Number,
  prop3: Array
});

mongoose.model('example', exampleSchema)

export default mongoose.model('example')
import { Example } from '../models'

async function getById (id) {
  try {
    let returnedExample = await example.findById(id).exec();
    return returnedExample;
  } catch (e) {
    return e.message;
  }
}

async function saveNewExample (example) {
  try {
    let newExample = new Example(example);
    let returnedExample = await newExample.save();
    return returnedExample;
  }
  catch (e) {
    return e;
  }
}

export default {
  getById,
  saveNewExample
}
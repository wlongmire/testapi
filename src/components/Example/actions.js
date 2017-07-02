import {exampleService} from '../../services';

exports.getExamples = async function () {
  return { success: true, message: 'Seed properly installed. Happy Coding!!' };
};

exports.getSingleExample = async function (id) {
  try {
    const returnedExample = await exampleService.getById(id);
    return { success: true, example: returnedExample };
  }
  catch (e) {
    return { success: false, error: e.message };
  }
}

exports.postExample = async function (example) {
  try {
    const returnedExample = await exampleService.saveNewExample(example);
    return { success: true, newId: returnedExample._id };
  }
  catch (e) {
    return { success: false, error: e.message };
  }
}
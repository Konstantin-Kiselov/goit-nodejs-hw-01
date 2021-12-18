const contactsOperations = require('./contacts');

const invokeAction = async (action, filePath, data) => {
  switch (action) {
    case 'getAll':
      const contacts = await contactsOperations.getAll();
      break;

    default:
      console.log('Unknown action');
      break;
  }
};

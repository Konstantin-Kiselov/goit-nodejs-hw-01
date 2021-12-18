const fs = require('fs/promises');
const path = require('path');

const fileOperation = async (action, filePath) => {
  switch (action) {
    case 'read':
      const data = await fs.readFile(filePath);
      console.log(data);
      break;

    default:
      console.log('Unknown action');
  }
};

const filePath = 'db/contacts.json';
fileOperation('read', filePath);

console.log(contactsPath);

module.exports = { contactsPath };

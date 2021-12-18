const fs = require('fs/promises');
// const path = require('path');

const fileOperation = async (action, filePath, data) => {
  switch (action) {
    case 'read':
      const text = await fs.readFile(filePath, 'utf-8');
      // const data = await fs.readFile(filePath);
      // const text = data.toString();
      // console.log(text);
      break;

    case 'add':
      await fs.appendFile(filePath, data);
      break;

    case 'replace':
      await fs.writeFile(filePath, data);
      break;

    default:
      console.log('Unknown action');
  }
};

const filePath = 'file/file.txt';
// fileOperation('read', filePath);
const phrase = 'Однозначно!';
// fileOperation('add', filePath, `\n${phrase}`);
fileOperation('replace', filePath, `${phrase}`);

module.exports = {};

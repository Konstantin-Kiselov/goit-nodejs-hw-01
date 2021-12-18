const fs = require('fs/promises');

const getAll = async () => {
  const products = await fs.readFile('db/contacts.json');
  return products;
};

module.exports = {
  getAll,
};

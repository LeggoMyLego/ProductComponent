/* eslint-disable no-console */
const { getProductData, getStoreData } = require('./model.js');

const getProduct = (id, callback) => {
  getProductData(id, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const getStores = (id, callback) => {
  getStoreData(id, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

module.exports = {
  getProduct,
  getStores,
};

const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};

const create = (resource) => {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      return db("resources").where("resource_id", id).first();
    });
};

module.exports = {
  create,
  getAll,
};

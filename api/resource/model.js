const db = require("../../data/dbConfig"); // connect to database

const getAll = () => {
  return db("resources"); // return all resources in database
};

const create = (resource) => {
  return db("resources")
    .insert(resource) // access the resources table and add the new resource
    .then(([id]) => {
      return db("resources").where("resource_id", id).first(); // return the newly created resource using its id
    });
};

module.exports = {
  create,
  getAll,
};

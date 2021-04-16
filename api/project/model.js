const db = require("../../data/dbConfig");

const getAll = () => {
  return db("projects");
};

const create = (project) => {
  return db("projects")
    .insert(project)
    .then(([id]) => {
      return db("projects").where("project_id", id).first();
    });
};

module.exports = {
  create,
  getAll,
};

const db = require("../../data/dbConfig"); // connect to database

const getAll = () => {
  return db("projects"); // return all projects in database
};

const create = (project) => {
  return db("projects")
    .insert(project) // access the projects table and add the new project
    .then(([id]) => {
      return db("projects").where("project_id", id).first(); // return the newly created project using its id
    });
};

module.exports = {
  create,
  getAll,
};

const db = require("../../data/dbConfig");

const getAll = () => {
  return db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_name", "p.project_description");
};

const create = (task) => {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      return db("tasks").where("task_id", id).first();
    });
};

module.exports = {
  create,
  getAll,
};

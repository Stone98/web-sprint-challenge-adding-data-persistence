const db = require("../../data/dbConfig"); // connect to database

const getAll = () => {
  return db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_name", "p.project_description"); // return all tasks with all the task info plus the project_name and project_description that that task belongs to
};

const create = (task) => {
  return db("tasks")
    .insert(task) // access the tasks table and add the new task
    .then(([id]) => {
      return db("tasks").where("task_id", id).first(); // return the newly created task using its id
    });
};

module.exports = {
  create,
  getAll,
};

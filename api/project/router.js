const router = require("express").Router(); // sets up projects router
const Project = require("./model"); // imports projects model functions

// route to GET all projects
router.get("/", async (req, res, next) => {
  try {
    const data = await Project.getAll(); // store all projects in data variable
    for (let i = 0; i < data.length; i++) {
      // loop over each project in data
      let row = data[i]; // assign each projec to row by using its own index
      if (row.project_completed === 0) {
        // if 0 make project_completed false, otherwise make it true
        row.project_completed = false;
      } else {
        row.project_completed = true;
      }
    }
    res.status(200).json(data); // respond with all projects with project_compeleted either true or false
  } catch (err) {
    // if error occurs, send it to the error handling middleware
    next(err);
  }
});

// route to POST a new project
router.post("/", async (req, res, next) => {
  try {
    const project = req.body;
    const data = await Project.create(project); // store new project in data variable
    if (data.project_completed === 0) {
      // if 0 make project_completed false, otherwise make it true
      data.project_completed = false;
    } else {
      data.project_completed = true;
    }
    res.status(201).json(data); // responds with newly created project
  } catch (err) {
    // if error occurs, send it to the error handling middleware
    next(err);
  }
});

// error handling middleware for errors that occur in projects router
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    sageAdvice: "Finding the real error is 90% of the bug fix",
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;

const router = require("express").Router();
const Project = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const data = await Project.getAll();
    for (let i = 0; i < data.length; i++) {
      let row = data[i];
      if (row.project_completed === 0) {
        row.project_completed = false;
      } else {
        row.project_completed = true;
      }
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const project = req.body;
    const data = await Project.create(project);
    if (data.project_completed === 0) {
      data.project_completed = false;
    } else {
      data.project_completed = true;
    }
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});

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

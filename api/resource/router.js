const router = require("express").Router();
const Resource = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const data = await Resource.getAll();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = req.body;
    const data = await Resource.create(resource);
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

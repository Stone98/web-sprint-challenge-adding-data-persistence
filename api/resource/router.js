const router = require("express").Router(); // sets up resources router
const Resource = require("./model"); // imports resources model functions

// route to GET all resources
router.get("/", async (req, res, next) => {
  try {
    const data = await Resource.getAll(); // store all resources in a data variable
    res.status(200).json(data); // respond with all resources
  } catch (err) {
    // if error occurs, send it to the error handling middleware
    next(err);
  }
});

// route to POST a new resource
router.post("/", async (req, res, next) => {
  try {
    const resource = req.body;
    const data = await Resource.create(resource); // store new resource in data variable
    res.status(201).json(data); // respond with newly created resource
  } catch (err) {
    // if error occurs, send it to the error handling middleware
    next(err);
  }
});

// error handling middleware for errors that occur in resources router
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

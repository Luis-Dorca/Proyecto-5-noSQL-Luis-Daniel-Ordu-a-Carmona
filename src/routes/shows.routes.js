const express = require("express");
const { getShowById, createShow, getAllShows, updatedShow, deletedShow} = require("../controllers/shows.controllers");

const showRouter = express.Router();

showRouter.get("/", getAllShows);
showRouter.get("/:id", getShowById);
showRouter.post("/", createShow);
showRouter.put("/:id", updatedShow);
showRouter.delete("/:id",deletedShow);

module.exports = showRouter;
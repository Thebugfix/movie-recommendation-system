const express = require("express");
const router = express.Router();
const Favorite = require("../models/Favorite");


// ✅ SAVE MOVIE
router.post("/", async (req, res) => {
  try {
    const movie = new Favorite(req.body);
    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ GET SAVED MOVIES
router.get("/saved", async (req, res) => {
  try {
    const movies = await Favorite.find({ status: "saved" });
    res.json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ GET WATCHED MOVIES
router.get("/watched", async (req, res) => {
  try {
    const movies = await Favorite.find({ status: "watched" });
    res.json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ✅ MARK AS WATCHED
router.put("/:id", async (req, res) => {
  try {
    const movie = await Favorite.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
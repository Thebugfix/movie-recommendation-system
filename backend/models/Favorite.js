const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  movieId: Number,
  title: String,
  poster: String,
  status: {
    type: String,
    enum: ["saved", "watched"],
    default: "saved",
  },
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
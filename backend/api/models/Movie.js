const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    duration: { type: String },
    release_date: { type: Date },
    genres: { type: Array },
    director: { type: String },
    producer: { type: Array },
    manufacturer_company: { type: String },
    description: { type: String },
    image: { type: String },
    trailer: { type: String },
    limit: { type: Number },
    isSeries: { type: Boolean, default: false },
},
{ timestamps: true });

module.exports = mongoose.model("Movie", MovieSchema);
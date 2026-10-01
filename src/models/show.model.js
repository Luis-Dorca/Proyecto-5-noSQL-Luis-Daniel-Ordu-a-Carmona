const mongoose = require("mongoose");

const TYPES = ["shortboard", "fish", "funboard", "longboard", "gun", "egg"];
const FINS = ["single", "twin", "thruster", "quad", "2+1"];
const MATERIALS = ["PU", "epoxy", "soft"];
const LEVELS = ["principiante", "intermedio", "avanzado"];

const showSchema = new mongoose.Schema({
        name: { type: String, required: true, trim: true },
        brand: { type: String, required: true, trim: true },
        type: { type: String, required: true, enum: TYPES },
        length: { type: String, required: true, trim: true },
        width: { type: Number, required: true, min: 0 },
        thickness: { type: Number, required: true, min: 0 },
        volume: { type: Number, required: true, min: 0 }, 
        fins: { type: String, required: true, enum: FINS },
        material: { type: String, required: true, enum: MATERIALS },
        level: { type: String, required: true, enum: LEVELS },
        price: { type: Number, required: true, min: 0 },
        inStock: { type: Boolean, default: true },
    },{
    timestamps: true,
    versionKey: false,
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;


const  mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A tour must have a name"], unique: true },
    rating: { type: Number, default: 4.5 },
    price: { type: Number, required: [true, "A tour must have a price"] },
    img: { type: String, required: [true, "A tour must have an image"] },
    description: { type: String, required: [true, "A tour must have a description"] },
    location: { type: String, required: [true, "A tour must have a location"] },
    view: { type: Number, default: 0 },
}, {timestamps: true});

const Tours = mongoose.model("Tour", tourSchema);

export default Tours;
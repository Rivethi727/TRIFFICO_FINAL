import mongoose from 'mongoose';

const placeToVisitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
});

const PlaceToVisit = mongoose.model('PlaceToVisit', placeToVisitSchema);

export default PlaceToVisit;

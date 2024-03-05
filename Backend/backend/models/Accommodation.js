import mongoose from 'mongoose';

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  perDayAmount: { type: Number, required: true },
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

export default Accommodation;

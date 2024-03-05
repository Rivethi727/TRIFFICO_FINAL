import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  destination: String,
  checkInDate: Date,
  checkOutDate: Date,
  adults: Number,
  children: Number,
  duration: Number,
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
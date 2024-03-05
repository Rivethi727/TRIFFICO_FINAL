import Trip from '../models/tripModel.js';

export const createTrip = async (req, res) => {
  try {
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json({ message: 'Trip created successfully', data: trip });
  } catch (error) {
    res.status(500).json({ message: 'Error creating trip', error });
  }
};




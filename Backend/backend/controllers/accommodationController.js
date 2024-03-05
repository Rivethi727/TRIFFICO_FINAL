import Accommodation from '../models/Accommodation.js';

export const getAllAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ message: 'Accommodation not found' });
    }
    res.json(accommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAccommodation = async (req, res) => {
  try {
    const newAccommodation = await Accommodation.create(req.body);
    res.status(201).json(newAccommodation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateAccommodation = async (req, res) => {
  try {
    const updatedAccommodation = await Accommodation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAccommodation) {
      return res.status(404).json({ message: 'Accommodation not found' });
    }
    res.json(updatedAccommodation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteAccommodation = async (req, res) => {
  try {
    const deletedAccommodation = await Accommodation.findByIdAndDelete(req.params.id);
    if (!deletedAccommodation) {
      return res.status(404).json({ message: 'Accommodation not found' });
    }
    res.json(deletedAccommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

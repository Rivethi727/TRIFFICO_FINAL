// placeToVisitController.js

import PlaceToVisit from '../models/PlaceToVisit.js';

export const getAllPlacesToVisit = async (req, res) => {
  try {
    const placesToVisit = await PlaceToVisit.find();
    res.json(placesToVisit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPlaceToVisitById = async (req, res) => {
  try {
    const placeToVisit = await PlaceToVisit.findById(req.params.id);
    if (!placeToVisit) {
      return res.status(404).json({ message: 'Place to visit not found' });
    }
    res.json(placeToVisit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPlaceToVisit = async (req, res) => {
  try {
    const newPlaceToVisit = await PlaceToVisit.create(req.body);
    res.status(201).json(newPlaceToVisit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updatePlaceToVisit = async (req, res) => {
  try {
    const updatedPlaceToVisit = await PlaceToVisit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPlaceToVisit) {
      return res.status(404).json({ message: 'Place to visit not found' });
    }
    res.json(updatedPlaceToVisit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePlaceToVisit = async (req, res) => {
  try {
    const deletedPlaceToVisit = await PlaceToVisit.findByIdAndDelete(req.params.id);
    if (!deletedPlaceToVisit) {
      return res.status(404).json({ message: 'Place to visit not found' });
    }
    res.json(deletedPlaceToVisit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

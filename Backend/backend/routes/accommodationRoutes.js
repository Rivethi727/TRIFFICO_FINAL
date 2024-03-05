
import express from 'express';
const router = express.Router();
import {
  getAllAccommodations,
  getAccommodationById,
  createAccommodation,
  updateAccommodation,
  deleteAccommodation,
} from '../controllers/accommodationController.js';

router.get('/accommodations', getAllAccommodations);
router.get('/accommodations/:id', getAccommodationById);
router.post('/accommodations', createAccommodation);
router.put('/accommodations/:id', updateAccommodation);
router.delete('/accommodations/:id', deleteAccommodation);

export default router;

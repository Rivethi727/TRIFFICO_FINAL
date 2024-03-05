


import express from 'express';
import { createTrip } from '../controllers/tripController.js';

const router = express.Router();


router.post('/', createTrip);

export default router;

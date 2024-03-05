import express from 'express';
const router = express.Router();
import * as placeToVisitController from '../controllers/placeToVisitController.js';


router.get('/places-to-visit', placeToVisitController.getAllPlacesToVisit);
router.get('/places-to-visit/:id', placeToVisitController.getPlaceToVisitById);
router.post('/places-to-visit', placeToVisitController.createPlaceToVisit);
router.put('/places-to-visit/:id', placeToVisitController.updatePlaceToVisit);
router.delete('/places-to-visit/:id', placeToVisitController.deletePlaceToVisit);

export default router;

import express from 'express';
import { getStations, addStation } from '../controllers/stations.js';

const router = express.Router();
router.get('/', getStations);
router.post('/', addStation);

export default router;

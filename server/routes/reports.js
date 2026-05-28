import express from 'express';
import { getReports, addReport } from '../controllers/reports.js';

const router = express.Router();
router.get('/', getReports);
router.post('/', addReport);

export default router;

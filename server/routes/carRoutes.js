import express from 'express';
import { createCar } from '../controllers/CarController.js';

const router = express.Router();
export default router;
router.route("/createCar").post(createCar);
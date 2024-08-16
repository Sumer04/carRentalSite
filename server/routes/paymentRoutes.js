import express from 'express';
import { checkout, paymentverification } from '../controllers/paymentController.js';
const router = express.Router();
export default router;
router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentverification);
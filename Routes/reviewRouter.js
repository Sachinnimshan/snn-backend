import {feedReviews,getAllReviews,getSingleReview} from '../controllers/reviewController.js';
import express from 'express';

const router = express.Router();

router.get('/seed', feedReviews);
router.get('/', getAllReviews);
router.get('/:id', getSingleReview);

export default router;
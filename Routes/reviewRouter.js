import {feedReviews,getAllReviews,getSingleReview, postReview} from '../controllers/reviewController.js';
import express from 'express';
import { reviewValidation } from '../validations/reviewValidate.js';

const router = express.Router();

router.get('/seed', feedReviews);
router.get('/', getAllReviews);
router.get('/:id', getSingleReview);
router.post('/post', reviewValidation, postReview);

export default router;
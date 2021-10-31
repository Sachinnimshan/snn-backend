import express from 'express';
import {feedProjects, getAllProjects} from '../controllers/projectController.js';

const router = express.Router();

router.get('/seed', feedProjects);
router.get('/', getAllProjects);



export default router;
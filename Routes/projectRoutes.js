import express from 'express';
import {feedProjects, getAllProjects, getProjectInfo} from '../controllers/projectController.js';

const router = express.Router();

router.get('/seed', feedProjects);
router.get('/', getAllProjects);
router.get('/:id', getProjectInfo);



export default router;
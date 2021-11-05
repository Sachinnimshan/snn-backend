import { feedUsers, viewUsers, userSignIn, userRegister, userProfile, updateProfile } from "../controllers/userController.js";
import express from 'express';
import { userValidation } from '../validations/userValidate.js';
import { IsAuth } from "../util.js";


const router = express.Router();

router.get('/seed', feedUsers);
router.get('/', viewUsers);
router.post('/signin', userSignIn);
router.post('/signup', userValidation, userRegister);
router.get('/:id', userProfile);
router.put('/update', IsAuth, userValidation, updateProfile);


export default router;
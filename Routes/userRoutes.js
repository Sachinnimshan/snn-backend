import { feedUsers, viewUsers, userSignIn, userRegister } from "../controllers/userController.js";
import express from 'express';
import { userValidation } from '../validations/userValidate.js';


const router = express.Router();

router.get('/seed', feedUsers);
router.get('/', viewUsers);
router.post('/signin', userSignIn);
router.post('/signup', userValidation, userRegister);


export default router;
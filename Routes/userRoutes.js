import { feedUsers, viewUsers, userSignIn, userRegister } from "../controllers/userController.js";
import express from 'express';


const router = express.Router();

router.get('/seed', feedUsers);
router.get('/', viewUsers);
router.post('/signin', userSignIn);
router.post('/signup', userRegister);


export default router;
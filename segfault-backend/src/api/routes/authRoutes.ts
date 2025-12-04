import express from 'express';
import { handleGoogleLogin, handleGuestLogin } from '../controllers/authController';

const router = express.Router();

router.post('/google', handleGoogleLogin);
router.post('/guest', handleGuestLogin);

export default router;

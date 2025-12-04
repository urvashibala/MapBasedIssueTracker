import express from 'express';
import { handleGoogleCallback, handleGoogleLogin, handleGuestLogin } from '../controllers/authController';

const router = express.Router();

router.get('/callback', handleGoogleCallback);
router.post('/google', handleGoogleLogin);
router.post('/guest', handleGuestLogin);

export default router;

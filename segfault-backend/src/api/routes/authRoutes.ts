import express from 'express';
import { handleGoogleLogin } from '../controllers/authController';

const router = express.Router();

router.post('/google', handleGoogleLogin);

export default router;

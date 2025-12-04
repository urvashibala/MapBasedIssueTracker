import type { Request, Response } from "express";
import { loginWithGoogle, generateGuestSession } from "../../services/authService";

export async function handleGoogleLogin(req: Request, res: Response) {
	try {
		const { code } = req.body ?? {};
		if (!code) {
            return res.status(400).json({ error: 'Missing authorization code' });
        } 

		const token = await loginWithGoogle(code);

		const sevenDaysMs = 1000 * 60 * 60 * 24 * 7;
		res.cookie('session', token, { httpOnly: true, maxAge: sevenDaysMs, sameSite: 'lax' });

		return res.status(200).json({ ok: true });
	} catch (err: any) {
		console.error('Google login failed', err);
		return res.status(500).json({ error: err?.message ?? 'Login failed' });
	}
}

export async function handleGuestLogin(_req: Request, res: Response) {
	try {
		const { token, guestTokenId } = await generateGuestSession();

		const oneDayMs = 1000 * 60 * 60 * 24;
		res.cookie('session', token, { httpOnly: true, maxAge: oneDayMs, sameSite: 'lax' });

		return res.status(200).json({ ok: true, guestTokenId });
	} catch (err: any) {
		console.error('Guest login failed', err);
		return res.status(500).json({ error: err?.message ?? 'Guest login failed' });
	}
}

export default { handleGoogleLogin, handleGuestLogin };

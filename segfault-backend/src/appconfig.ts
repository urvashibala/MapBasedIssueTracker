// Application configuration and secrets
export const GOOGLE_OAUTH = {
	CLIENT_ID: process.env.GOOGLE_CLIENT_ID ?? 'GOOGLE_CLIENT_ID_PLACEHOLDER',
	CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ?? 'GOOGLE_CLIENT_SECRET_PLACEHOLDER',
	REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI ?? 'http://localhost:3000/auth/google/callback',
};

export const JWT = {
	SECRET: process.env.JWT_SECRET ?? 'CHANGE_THIS_JWT_SECRET',
};

export default { GOOGLE_OAUTH, JWT };

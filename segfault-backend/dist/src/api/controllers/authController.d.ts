import type { Request, Response } from "express";
export declare function handleGoogleCallback(req: Request, res: Response): Promise<void>;
export declare function handleGoogleLogin(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function handleGuestLogin(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function handleRegister(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function handleLogin(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function handleVerify2FA(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function changePassword(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    handleGoogleCallback: typeof handleGoogleCallback;
    handleGoogleLogin: typeof handleGoogleLogin;
    handleGuestLogin: typeof handleGuestLogin;
    handleRegister: typeof handleRegister;
    handleLogin: typeof handleLogin;
    changePassword: typeof changePassword;
    handleVerify2FA: typeof handleVerify2FA;
};
export default _default;
//# sourceMappingURL=authController.d.ts.map
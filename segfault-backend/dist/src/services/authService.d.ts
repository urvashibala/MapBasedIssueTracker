export declare function exchangeGoogleCodeForProfile(code: string): Promise<{
    email: string;
    name: string | null;
    picture: string | null;
}>;
export declare function loginWithGoogle(code: string): Promise<string>;
export declare function registerWithEmail(email: string, password: string, name: string | null): Promise<string | {
    require2fa: boolean;
    userId: number;
}>;
export declare function loginWithEmail(email: string, password: string): Promise<string | {
    require2fa: boolean;
    userId: number;
}>;
export declare function verify2FACode(userId: number, code: string): Promise<string>;
export declare function generateGuestSession(): Promise<{
    token: string;
    guestTokenId: number;
}>;
export declare function changeUserPassword(userId: number, oldPass: string, newPass: string): Promise<boolean>;
declare const _default: {
    exchangeGoogleCodeForProfile: typeof exchangeGoogleCodeForProfile;
    loginWithGoogle: typeof loginWithGoogle;
    registerWithEmail: typeof registerWithEmail;
    loginWithEmail: typeof loginWithEmail;
    generateGuestSession: typeof generateGuestSession;
    changeUserPassword: typeof changeUserPassword;
    verify2FACode: typeof verify2FACode;
};
export default _default;
//# sourceMappingURL=authService.d.ts.map
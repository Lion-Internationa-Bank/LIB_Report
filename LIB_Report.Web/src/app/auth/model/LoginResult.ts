export interface LoginResult {
    success: boolean;
    message: string;
    token?: string;
    refreshToken?:string;
    mustChangePassword?:string;
   }
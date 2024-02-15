
export interface IMid {
    validateLoginCredentials(): boolean
    createHash(): Promise<string>
    compareHash(arg0: string): Promise<boolean>
    createToken(): Promise<string>;
}
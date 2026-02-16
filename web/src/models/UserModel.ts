export interface UserModel {
    ID: string;
    Name: string;
    Email: string;
    EmailVerified: boolean;
    Image?: string;
    CreatedAt: number;
    UpdatedAt: number;
}
export interface IUser {
    _id?: string; 
    fullName: string;
    phoneNumber:number;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
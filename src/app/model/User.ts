import { Role } from '../model';

export class User{
	public id?:number;
	public username:string;
	public password: string;
	public email: string;
	public roles: Role[];
}
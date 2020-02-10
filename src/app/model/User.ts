import { Role } from '../model';

export class User{
	public id?:number;
	public login:string;
	public password: string;
	public role: Role;
}
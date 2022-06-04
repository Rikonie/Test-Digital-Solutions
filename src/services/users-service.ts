import {HttpClient} from "./api/http-client";
import {User} from "../classes/user";

export interface IUsersService {
    getInfoUsers(): Promise<User[]>
}

export class UsersService implements IUsersService{

    constructor(private readonly httpClient: HttpClient){
    }

    getInfoUsers(): Promise<User[]> {
        return this.httpClient.get<any>('/users').then((r:any) =>{
            return r;
        } )
    }
}
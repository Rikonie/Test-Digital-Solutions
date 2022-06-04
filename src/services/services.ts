import {IUsersService} from "./users-service";
import {HttpClient} from "./api/http-client";

export interface Services {
    httpClient: HttpClient,
    usersService: IUsersService,
}
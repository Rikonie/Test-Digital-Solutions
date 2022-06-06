import {IUsersService} from "./users-service";
import {HttpClient} from "./api/http-client";
import {IPostsService} from "./posts-service";
import {ICommentsService} from "./comments-service";

export interface Services {
    httpClient: HttpClient,
    usersService: IUsersService,
    postsService: IPostsService,
    commentsService: ICommentsService
}
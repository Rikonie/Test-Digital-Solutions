import {HttpClient} from "./api/http-client";
import {Post} from "../classes/post";

export interface IPostsService {
    getInfoPosts(): Promise<Post[]>
}

export class PostsService implements IPostsService {

    constructor(private readonly httpClient: HttpClient) {
    }

    getInfoPosts(): Promise<Post[]> {
        return this.httpClient.get<any>('/posts').then((r: any) => {
            return r;
        })
    }
}
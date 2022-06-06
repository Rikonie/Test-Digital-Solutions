import {HttpClient} from "./api/http-client";
import {Comment} from "../classes/comment";

export interface ICommentsService {
    getInfoComments(postId: string): Promise<Comment[]>
}

export class CommentsService implements ICommentsService {

    constructor(private readonly httpClient: HttpClient) {
    }

    getInfoComments(postId: string): Promise<Comment[]> {
        return this.httpClient.get<any>('/posts/' + postId + "/comments").then((r: any) => {
            return r;
        })
    }
}
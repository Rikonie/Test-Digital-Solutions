import {HttpClient} from "./api/http-client";
import {Comment} from "../classes/comment";

export interface ICommentsService {
    getInfoComments(postId: string): Promise<Comment[]>;
    createNewComment(comment: Comment, postId: string): Promise<any>;
}

export class CommentsService implements ICommentsService {

    constructor(private readonly httpClient: HttpClient) {
    }

    getInfoComments(postId: string): Promise<Comment[]> {
        return this.httpClient.get<any>('/posts/' + postId + "/comments").then((r: any) => {
            return r;
        })
    }

    createNewComment(comment: Comment, postId: string): Promise<any> {
        return  this.httpClient.post<any>('/comments?postId='+ postId, comment).then((r:any)=>{
            return r;
        })
    }

}
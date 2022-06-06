import {RootEpic} from "./root-epic";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of, from} from "rxjs";

const postsLoad: RootEpic = (action$, _, {postsService}) =>
    action$.pipe(
        filter(isActionOf(Actions.post.getPosts.request)),
        switchMap((action)=> from(postsService.getInfoPosts()).pipe(
            map(r=>Actions.post.getPosts.success(r)),
            catchError(x=> of(Actions.post.getPosts.failure(x)))
        ))
    );

export const postsEpics = [
    postsLoad
];
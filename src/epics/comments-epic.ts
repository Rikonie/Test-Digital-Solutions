import {RootEpic} from "./root-epic";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of, from} from "rxjs";

const commentsLoad: RootEpic = (action$, _, {commentsService}) =>
    action$.pipe(
        filter(isActionOf(Actions.comment.getComments.request)),
        switchMap((action)=> from(commentsService.getInfoComments(action.payload)).pipe(
            map(r=>Actions.comment.getComments.success(r)),
            catchError(x=> of(Actions.comment.getComments.failure(x)))
        ))
    );

export const commentsEpics = [
    commentsLoad
];
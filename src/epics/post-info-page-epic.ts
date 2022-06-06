import {RootEpic} from "./root-epic";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {filter, switchMap} from "rxjs/operators";

const postInfoPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.post.postInfoPageOpened)),
        switchMap((action) => {
            return  [Actions.comment.getComments.request(action.payload), Actions.post.getPosts.request({})]
        })
    );


export const postInfoPageEpics = [
    postInfoPageOpened,
];
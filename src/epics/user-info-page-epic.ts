import {RootEpic} from "./root-epic";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {filter, switchMap} from "rxjs/operators";

const userInfoPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.userInfoPage.userInfoPageOpened)),
        switchMap((action) => {
            return  [Actions.user.getUsers.request({}), Actions.post.getPosts.request({})]
        })
    );


export const userInfoPageEpics = [
    userInfoPageOpened,
];

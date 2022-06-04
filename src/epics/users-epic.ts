import {isActionOf} from "typesafe-actions";
import {of, from} from "rxjs";
import {Actions} from "../store/actions";
import {catchError, filter, map, switchMap} from "rxjs/operators";
import {RootEpic} from "./root-epic";


const usersPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.user.userOpened)),
        map((action) => {
            return  Actions.user.getUsers.request({})
        })
    );

const usersLoad: RootEpic = (action$, _, {usersService}) =>
    action$.pipe(
        filter(isActionOf(Actions.user.getUsers.request)),
        switchMap((action)=> from(usersService.getInfoUsers()).pipe(
            map(r=>Actions.user.getUsers.success(r)),
            catchError(x=> of(Actions.user.getUsers.failure(x)))
        ))
    );

export const usersEpics = [
    usersPageOpened,
    usersLoad
];
import {combineEpics} from "redux-observable";
import {usersEpics} from "./users-epic";
import {userInfoPageEpics} from "./user-info-page-epic";
import {postsEpics} from "./posts-epic";
import {commentsEpics} from "./comments-epic";
import {postInfoPageEpics} from "./post-info-page-epic";

export const rootEpics = () =>
    combineEpics(
        ...usersEpics,
        ...userInfoPageEpics,
        ...postsEpics,
        ...commentsEpics,
        ...postInfoPageEpics
    );
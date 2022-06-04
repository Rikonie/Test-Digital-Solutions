import {combineEpics} from "redux-observable";
import {usersEpics} from "./users-epic";

export const rootEpics = () =>
    combineEpics(
        ...usersEpics,
    );
import {combineReducers} from "redux";
import {ActionType, StateType} from "typesafe-actions";
import {Actions} from "../store/actions";
import {usersReducer} from "../store/users-reducer";
import {postsReducer} from "../store/posts-reducer";
import {commentsReducer} from "../store/comments-reducer";

export const rootReducer = () =>
    combineReducers({
        usersInfo: usersReducer(),
        postsInfo: postsReducer(),
        commentsInfo: commentsReducer(),
    });

export type RootState = StateType<ReturnType<typeof rootReducer>>;
export type RootAction = ActionType<typeof Actions>;
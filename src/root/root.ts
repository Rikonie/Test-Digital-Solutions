import {combineReducers} from "redux";
import {ActionType, StateType} from "typesafe-actions";
import {Actions} from "../store/actions";
import {usersReducer} from "../store/users-reducer";

export const rootReducer = () =>
    combineReducers({
        usersInfo: usersReducer(),
    });

export type RootState = StateType<ReturnType<typeof rootReducer>>;
export type RootAction = ActionType<typeof Actions>;
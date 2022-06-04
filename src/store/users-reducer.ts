import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const usersInfo = createReducer<any>(null)
    .handleAction(Actions.user.getUsers.success, (state:any, action:any) => {
        return action.payload;
    });

export const usersReducer = () =>
    combineReducers({
        usersInfo,
    });
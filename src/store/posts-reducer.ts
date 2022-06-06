import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const postsInfo = createReducer<any>(null)
    .handleAction(Actions.post.getPosts.success, (state:any, action:any) => {
        return action.payload;
    });

export const postsReducer = () =>
    combineReducers({
        postsInfo,
    });
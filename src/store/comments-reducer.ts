import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const commentsInfo = createReducer<any>(null)
    .handleAction(Actions.comment.getComments.success, (state:any, action:any) => {
        return action.payload;
    });

const createNewCommentStatus = createReducer<any>(null)
    .handleAction(Actions.comment.createComment.success, (state:any, action:any) => {
        return "Успешно";
    });

export const commentsReducer = () =>
    combineReducers({
        commentsInfo,
        createNewCommentStatus
    });
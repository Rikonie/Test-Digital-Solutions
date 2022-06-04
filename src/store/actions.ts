import {ActionType, createAction, createAsyncAction, StateType} from "typesafe-actions";
import {User} from "../classes/user";
import {rootReducer} from "../root/root";

const userOpened = createAction('@@user-opened')();

const getUsers = createAsyncAction(
    '@@get-users/request',
    '@@get-users/success',
    '@@get-users/failure'
)<{}, User[], Error>();

export const Actions = {
    user:{
        userOpened,
        getUsers
    }
};

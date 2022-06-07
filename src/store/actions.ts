import {createAction, createAsyncAction} from "typesafe-actions";
import {User} from "../classes/user";
import {Post} from "../classes/post";
import {Comment} from "../classes/comment";

const usersPageOpened = createAction('@@users-page-opened')();
const userInfoPageOpened = createAction('@@user-info-page-opened')();
const postInfoPageOpened = createAction('@@post-info-page-opened')<string>();

const getUsers = createAsyncAction(
    '@@get-users/request',
    '@@get-users/success',
    '@@get-users/failure'
)<{}, User[], Error>();

const getPosts = createAsyncAction(
    '@@get-posts/request',
    '@@get-posts/success',
    '@@get-posts/failure'
)<{}, Post[], Error>();

const getComments = createAsyncAction(
    '@@get-comments/request',
    '@@get-comments/success',
    '@@get-comments/failure'
)<string, Comment[], Error>();

const createComment = createAsyncAction(
    '@@create-comment/request',
    '@@create-comment/success',
    '@@create-comment/failure'
)<{comment:Comment, postId: string}, {}, Error>();

export const Actions = {
    user: {
        usersPageOpened,
        getUsers
    },
    post: {
        getPosts,
        postInfoPageOpened
    },
    userInfoPage: {
        userInfoPageOpened
    },
    comment:{
        getComments,
        createComment
    }
};

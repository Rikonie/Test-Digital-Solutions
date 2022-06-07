import {RootState} from "../root/root";

export const commentsInfoSelector = (state: RootState) => state.commentsInfo.commentsInfo;
export const createCommentStatus = (state: RootState) => state.commentsInfo.createNewCommentStatus;
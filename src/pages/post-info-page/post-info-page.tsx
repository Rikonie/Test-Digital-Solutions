import {default as React, useEffect, useState} from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {commentsInfoSelector, createCommentStatus} from "../../selector/comments-selector";
import {Comment} from "../../classes/comment";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {postsInfoSelector} from "../../selector/posts-selector";
import {Post} from "../../classes/post";
import {buildTimeValue} from "@testing-library/user-event/dist/utils";


export const PostInfoPage = () => {

    const [bodyComment, setBodyComment] = useState<string>();
    const [nameUserCreatedComment, setNameUserCreatedComment] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>();

    let params = useParams();
    let userId = params.userId as string;
    let postId = params.id as string;

    const dispatch = useAppDispatch();

    useEffect(
        () => {
            dispatch(Actions.post.postInfoPageOpened(postId));
        }, [dispatch]
    );

    const comments = useSelector(commentsInfoSelector) as Comment[];
    const posts = useSelector(postsInfoSelector) as Post [];
    const resultCreateNewComment = useSelector(createCommentStatus) as string;

    const post: Post | undefined = posts?.find(a => a.id == postId);

    const commentChange = (event: any) => {
        setBodyComment(event.target.value);
    };

    const userChange = (event: any) => {
        setNameUserCreatedComment(event.target.value)
    };

    const emailChange = (event: any) => {
        setUserEmail(event.target.value)
    };

    const createNewComment = () => {
        const newComment = new Comment(postId, "", nameUserCreatedComment, userEmail as string, bodyComment as string)
        dispatch(Actions.comment.createComment.request({comment: newComment, postId: postId}))
    };

    return (
        <div>
            <div>
                <div>Пост:</div>
                <div>{post?.title}</div>
                <div>{post?.body}</div>
            </div>
            <div>
                <div>Комментарии</div>
                {comments ? comments?.map((i: Comment, key: number) => {
                    return (
                        <div key={key}>
                            <div>Пользователь:</div>
                            <div>{i.name}</div>
                            <div>{i.email}</div>
                            <div>Комментарий:</div>
                            <div>{i.body}</div>
                        </div>
                    )
                }) : "Загрузка"}
            </div>
            <div>
            <div>Оставить комментарий:</div>
            <input value={nameUserCreatedComment} placeholder={"Имя пользователя"} onChange={userChange}/>
            <input value={userEmail} placeholder={"Email"} onChange={emailChange}/>
            <input value={bodyComment} placeholder={"Написать комментарий"} onChange={commentChange}/>
            <button onClick={createNewComment}>Добавить комментарий</button>
            <div>{resultCreateNewComment ? resultCreateNewComment : ""}</div>
            </div>
        </div>
    );
};
import {default as React, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {usersInfoSelector} from "../../selector/users-selector";
import {User} from "../../classes/user";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {postsInfoSelector} from "../../selector/posts-selector";
import {Post} from "../../classes/post";

export const UserInfoPage = () => {

    const dispatch = useAppDispatch();

    useEffect(
        () => {
            dispatch(Actions.userInfoPage.userInfoPageOpened());
        }, [dispatch]
    );

    const users = useSelector(usersInfoSelector) as User[];
    const posts = useSelector(postsInfoSelector) as Post[];

    let params = useParams().userId as string;

    let userInfo: User | undefined = users?.find(a => a.id == params);
    let postsInfo: Post[] = posts?.filter(a => a.userId == params);

    return (
        <div>
            <div>
                {userInfo ?
                    <div>
                        <div>
                            {userInfo.username}
                        </div>
                        <div>
                            {userInfo.name}
                        </div>
                        <div>
                            {userInfo.email}
                        </div>
                        <div>
                            {userInfo.phone}
                        </div>
                        <div>
                            {userInfo.website}
                        </div>
                        <div>
                            {userInfo.company.name}
                        </div>
                        <div>
                            {userInfo.company.bs}
                        </div>
                    </div> : "Загрузка"}
            </div>
            <div>
                {postsInfo ? postsInfo.map((i: Post, key: number) => {
                    return (
                        <div key={key}>
                            <div>{i.title}</div>
                            <div>{i.body}</div>
                            <form action={"/user/" + params + "/post/" + i.id}>
                                <button type="submit">Посмотреть комментарии</button>
                            </form>
                        </div>
                    )
                }) : "Загрузка"}
            </div>
        </div>
    );
};
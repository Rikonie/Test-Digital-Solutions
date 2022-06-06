import {useAppDispatch} from "../../store/app-dispatch";
import {useEffect} from "react";
import {Actions} from "../../store/actions";
import {useSelector} from "react-redux";
import {usersInfoSelector} from "../../selector/users-selector";
import {User} from "../../classes/user";
import * as React from "react";

export const UsersPage = () => {

    const dispatch = useAppDispatch();

    useEffect(
        () => {
            dispatch(Actions.user.getUsers.request({}));
        }, []
    );

    let users = useSelector(usersInfoSelector) as User[];

    return (
        <div>
            {users ?
                users?.map((i: any, key: number) => {
                    return (
                        <div key={key}>
                            <div>{i.username}</div>
                            <div>{i.name}</div>
                            <form action={"/user/"+i.id}>
                                <button type="submit">Посмотреть профиль</button>
                            </form>
                        </div>
                    )
                })
                : ""}
        </div>
    );
};
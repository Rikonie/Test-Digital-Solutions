import {useAppDispatch} from "./store/app-dispatch";
import {useEffect} from "react";
import {Actions} from "./store/actions";
import {useSelector} from "react-redux";
import {usersInfoSelector} from "./selector/users-selector";

export const UserPage = () => {

    const dispatch = useAppDispatch();

    useEffect(
        () => {
            dispatch(Actions.user.userOpened());
        }, [dispatch]
    );

    let users = useSelector(usersInfoSelector);

  return (
    <div>
   hello
        {users? JSON.stringify(users):""}
    </div>
  );
};
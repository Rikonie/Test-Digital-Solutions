import {NotFoundPage} from "../pages/not-found-page/not-found-page";
import {Route, Routes} from "react-router-dom";
import {UsersPage} from "../pages/users-page/users-page";
import React from "react";
import {UserInfoPage} from "../pages/user-info-page/user-info-page";
import {PostInfoPage} from "../pages/post-info-page/post-info-page";

export const MainRouter: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<UsersPage/>}/>
            <Route path="/user/:userId" element={<UserInfoPage/>}/>
            <Route path="/user/:userId/post/:id" element={<PostInfoPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};
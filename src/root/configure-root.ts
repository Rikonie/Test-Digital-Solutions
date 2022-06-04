import {applyMiddleware, createStore, Store} from "redux";
import {HttpClient} from "../services/api/http-client";
import {RootAction, rootReducer, RootState} from "./root";
import {createEpicMiddleware} from "redux-observable";
import {Services} from "../services/services";
import {rootEpics} from "../epics/epics";
import {UsersService} from "../services/users-service";

export interface RootConfig {
    store: Store<RootState, RootAction>;
}

export function configureRoot(): RootConfig {
    const httpClient = new HttpClient("https://jsonplaceholder.typicode.com");
    const usersService = new UsersService(httpClient);

    const epicMiddleware = createEpicMiddleware<RootAction,
        RootAction,
        RootState,
        Services>({
        dependencies: {
            httpClient: httpClient,
            usersService: usersService
        }
    });
    const store = createStore<RootState, RootAction, unknown, unknown>(
        rootReducer(),
        {},
        applyMiddleware(epicMiddleware)
    );
    epicMiddleware.run(rootEpics());
    return {store};
}
import { combineReducers } from "redux";
import { taskReducer } from "./tasksReducer";

export const rootReducer = combineReducers({
    taskReducer    
});

export type RootState = ReturnType<typeof rootReducer>;

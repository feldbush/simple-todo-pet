import { TaskAction, TaskActions, TaskState } from "../../types/tasks";

const initialState : TaskState = {
    tasks: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
};

export const taskReducer = (state = initialState, action : TaskAction ) : TaskState => {
    switch (action.type) {
        case TaskActions.FETCH_TASKS:
            return {...state, loading: true} 

        case TaskActions.FETCH_TASKS_SUCCES:
            return {...state, tasks: action.payload, loading: false} 

        case TaskActions.FETCH_TASKS_ERROR:
            return {...state, error: action.payload} 

        case TaskActions.SET_TASK_PAGE:
            return {...state, page: action.payload} 

        default : 
            return state
    }
}

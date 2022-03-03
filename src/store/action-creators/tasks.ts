import axios from "axios";
import { Dispatch } from "react";
import { TaskAction, TaskActions } from "../../types/tasks"

export const fetchTasks = (page = 1, limit = 10) => {
    return async (dispatch : Dispatch<TaskAction>) => {
        try {
            dispatch({type: TaskActions.FETCH_TASKS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            });
            
            dispatch({type: TaskActions.FETCH_TASKS_SUCCES, payload: response.data});
        } catch (e) {
            dispatch({type: TaskActions.FETCH_TASKS_ERROR, payload: "Произошла ошибка!"})
        }

    }
}

export const setTasksPage = (page: number) : TaskAction => {
    return {type: TaskActions.SET_TASK_PAGE, payload: page}
}

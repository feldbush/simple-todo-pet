export enum TaskActions {
    FETCH_TASKS = 'FETCH_TASKS',
    FETCH_TASKS_SUCCES = 'FETCH_TASKS_SUCCES',
    FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR',
    SET_TASK_PAGE = 'SET_TASK_PAGE',
}

interface FetchTasksAction {
    type: TaskActions.FETCH_TASKS;
}

interface FetchTasksSuccesAction {
    type: TaskActions.FETCH_TASKS_SUCCES;
    payload: []
}

interface FetchTasksErrorAction {
    type: TaskActions.FETCH_TASKS_ERROR;
    payload: string
}

interface SetTasksPageAction {
    type: TaskActions.SET_TASK_PAGE;
    payload: number
}

export type TaskAction = FetchTasksAction | FetchTasksSuccesAction | FetchTasksErrorAction | SetTasksPageAction;
export interface TaskState {
    tasks: any[]
    loading: boolean
    error: null | string
    page: number
    limit: number
}

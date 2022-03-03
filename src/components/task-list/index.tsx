import React, { Dispatch, useEffect } from "react";
import { useActions } from "../../store/hooks/useAction";
import { useTypedSelector } from "../../store/hooks/useTypedSelector"
import { TaskAction, TaskActions } from "../../types/tasks";

import style from './task-list.module.css';


export const TaskList : React.FC = (props) => {
    const {tasks, loading, error, page, limit} = useTypedSelector(state => state.taskReducer);
    const {fetchTasks, setTasksPage} = useActions();
    const pages = [1,2,3,4,5];
    
    useEffect(() => {
        fetchTasks(page, limit);
    }, [page, limit]);

    const handelPagination = (page : number) => {
        setTasksPage(page)
    }

    if(loading) {
        return (
            <div>Идёт загрузка...</div>
        )
    }

    if(error) {
        return(
            <div>{error}</div>
        )
    }

    return (
        <div>
            {tasks.map((task) => (
                    <React.Fragment key={task.id}>
                        <hr />
                            <div>
                                {`${task.id}`} - {task.title}
                                <br />
                                Готово: {`${task.completed}`}
                            </div>
                        <hr />
                    </React.Fragment>
                )
            )}

            <div className={style.pagination}>
                {pages.map(pageItem => (
                   <span onClick={() => handelPagination(pageItem)} key={pageItem} className={pageItem === page ? style.current : ''}> 
                       {`${pageItem}`}
                   </span> 
                ))}
            </div>
        </div>
    )
}
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as TaskActions from '../action-creators/tasks';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TaskActions, dispatch);
}

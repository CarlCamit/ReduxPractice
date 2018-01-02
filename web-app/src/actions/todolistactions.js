import { createToDoList, readToDoList, updateToDoList, deleteToDoList } from '../api/todolist'

export function getToDoList() {
    return (dispatch) => {
        dispatch({type: 'REQUEST_TODOLIST'})
        readToDoList().then((res) => {
            dispatch({
                type: 'RECIEVED_TODOLIST',
                payload: res
            })
        }).catch((err) => {
            dispatch({
                type: 'REQUEST_TODOLIST_ERROR', 
                payload: err
            })
        })
    }
}
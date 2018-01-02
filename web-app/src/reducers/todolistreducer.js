const toDoListReducer = (state = {
    fetching: false,
    todolist: [],
    error: null
}, action) => {
    switch (action.type) {
        case "REQUEST_TODOLIST":
            state = {
                ...state,
                fetching: true
            }
            break
        case "REQUEST_TODOLIST_ERROR":
            state = {
                ...state,
                fetching: false,
                error: action.payload
            }
            break
        case "RECIEVED_TODOLIST":
            state = {
                ...state,
                fetching: false,
                todolist: action.payload
            }
            break
    }
    return state
}

export default toDoListReducer
import {
    ADMIN_CHANGED,
    CHANGE_STATUS,
    GET_AUTH,
    GET_TODOS,
    HIDE_ALERT,
    IS_AUTH,
    SHOW_ALERT,
    SORT_EMAILS_BY_ABC,
    SORT_EMAILS_BY_ZYX,
    SORT_NAMES_BY_ABC,
    SORT_NAMES_BY_ZYX,
    SORT_TODOS_BY_ABC,
    SORT_TODOS_BY_ZYX,
    TODOS_COUNT
} from "./types";

const Initialstate = {
    todos: [],
    toDosCount: null,
    pageSize: 3,
    alert: null,
    auth: null,
    isAuth: 0
}

export const toDosReducer = (state = Initialstate, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case TODOS_COUNT:
            return {
                ...state,
                toDosCount: action.payload.q
            }
        case GET_AUTH:
            return {
                ...state,
                auth: action.payload
            }
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case CHANGE_STATUS:
            return {
                ...state,
                todos: state.todos.map(t => {
                    if (t.id === action.id) {
                        return { ...t, status: action.status}
                    }
                    return t
                })
            }
        case ADMIN_CHANGED:
            return {
                ...state,
                todos: state.todos.map(t => {
                    if (t.id === action.id) {
                        return { ...t, changed: action.changed}
                    }
                    return t
                })
            }
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: null
            }
        case SORT_NAMES_BY_ABC:
            return {
                ...state,
                todos: [ ...state.todos].sort((item1, item2) => {
                    if (item1.name > item2.name) {
                        return 1
                    }
                    if (item1.name < item2.name) {
                        return -1
                    }
                    return 0
                })
            }
        case SORT_NAMES_BY_ZYX:
            return {
                ...state,
                todos: [ ...state.todos].reverse()
            }
        case SORT_EMAILS_BY_ABC:
            return {
                ...state,
                todos: [ ...state.todos].sort((item1, item2) => {
                    if (item1.email > item2.email) {
                        return 1
                    }
                    if (item1.email < item2.email) {
                        return -1
                    }
                    return 0
                })
            }
        case SORT_EMAILS_BY_ZYX:
            return {
                ...state,
                todos: [ ...state.todos].reverse()
            }
        case SORT_TODOS_BY_ABC:
            return {
                ...state,
                todos: [ ...state.todos].sort((item1, item2) => {
                    if (item1.todo > item2.todol) {
                        return 1
                    }
                    if (item1.todo < item2.todo) {
                        return -1
                    }
                    return 0
                })
            }
        case SORT_TODOS_BY_ZYX:
            return {
                ...state,
                todos: [ ...state.todos].reverse()
            }

        default:
            return state
    }
}

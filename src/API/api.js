import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://nj9eq.sse.codesandbox.io/api'
})
export const getToDoAPI = (page, count) => {
    return instance.get(`/todos?page=${page}&count=${count}`)
}
export const getSortNamesABCAPI = (page, count) => {
    return instance.get(`/namesabc?page=${page}&count=${count}`)
}
export const getSortNamesXYZAPI = (page, count) => {
    return instance.get(`/nameszyx?page=${page}&count=${count}`)
}
export const getSortEmailABCAPI = (page, count) => {
    return instance.get(`/emailabc?page=${page}&count=${count}`)
}
export const getSortEmailXYZAPI = (page, count) => {
    return instance.get(`/emailzyx?page=${page}&count=${count}`)
}
export const getSortTodosABCAPI = (page, count) => {
    return instance.get(`/todosabc?page=${page}&count=${count}`)
}
export const getSortTodosXYZAPI = (page, count) => {
    return instance.get(`/todoszyx?page=${page}&count=${count}`)
}
export const addToDoAPI = (body) => {
    return instance.post('/addtodo', body)
}
export const deleteToDoAPI = (id) => {
    return instance.delete(`/delete/${id}`)
}
export const getToDosCountAPI = () => {
    return instance.get(`/count`)
}
export const loginAPI = (body) => {
    return instance.post(`/auth`, body)
}
export const getAuthAPI = (id = 1) => {
    return instance.get(`/getauth/${id}`)
}
export const confirmAuthAPI = (authStatus, id) => {
    return instance.post(`/authstatus`, {auth: authStatus, id})
}
export const changeStatusAPI = (status, id) => {
    return instance.post(`/updatestatus`, {status, id})
}
export const adminChangedAPI = (id, todo, changed) => {
    return instance.post(`/changed`, {id, todo, changed})
}

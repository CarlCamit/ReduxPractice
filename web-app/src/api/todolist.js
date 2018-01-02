import api from './init'

export function readToDoList() {
    return api.get('./todolists').then(res => {
        return res.data
    })
}

export function createToDoList({ name, completed }) {
    return api.post('./todolists', { name, completed }).then(res => {
        return res.data
    })
}

export function updateToDoList({ id, name, completed }) {
    return api.patch(`./todolists/${id}`, { name, completed }).then(res => {
        return res.data
    })
}

export function deleteToDoList({ id }) {
    return api.delete(`./todolists/${id}`)
}
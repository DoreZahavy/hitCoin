import { store } from "../store";
import {LOGOUT,SET_USER,ADD_MOVE,SET_MOVES,REMOVE_CONTACT,ADD_CONTACT,SET_CONTACT,SET_CONTACTS, REMOVE_USER,ADD_USER,UPDATE_USER, SET_FILTER_BY, SET_USERS, SET_MODAL } from "../reducers/user.reducer";
import { userService } from "../../services/user.service";
// import { userService } from "../../services/user.service.local";

export async function loadUsers() {
    try {
        // const filterBy = store.getState().userModule.filterBy
        const users = await userService.query()
        console.log('users:', users)
        const action = {
            type: SET_USERS,
            users
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)
    }

}

export function setModal(modal){
    const action = {
        type: SET_MODAL,
        modal
    }
    store.dispatch(action)
}

export async function removeUser(userId) {
    try {
        await userService.removeUser(userId)
        const action = {
            type: REMOVE_USER,
            userId
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)
        
    }

}
export async function addUser(user) {
    try {
        await userService.addUser(user)
        const action = {
            type: ADD_USER,
            user
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)   
    }
}
export async function updateUser(user) {
    try {
        const updatedUser = await userService.updateUser(user)
        const action = {
            type: UPDATE_USER,
            updatedUser
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)   
    }
}
export async function addContact(contactId) {
    try {
        const userId = store.getState().userModule.loggedinUser._id
        // await userService.addContact(userId,contact)
        const contact = await userService.addContact(userId ,contactId)
        const action = {
            type: ADD_CONTACT,
            contact
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)   
    }
}
export async function removeContact(contactId) {
    try {
        // const userId = store.getState().userModule.loggedinUser._id
        // const user = await userService.removeContact(userId,contactId)
        await userService.removeContact(contactId)
        const action = {
            type: REMOVE_CONTACT,
            contactId
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)   
    }
}

export async function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}

export async function addMove(move) {
    try {
        const move = await userService.addMove(move)
        store.dispatch({ type: ADD_MOVE, move})
    } catch (error) {
        console.log('error:', error)
    }
}
export async function queryMoves(userId) {
    try {
        const moves = await userService.queryMoves(userId)
        store.dispatch({ type: SET_MOVES, moves})
    } catch (error) {
        console.log('error:', error)
    }
}
export async function loadContact(userId,contactId) {
    try {
        const contact = await userService.getContactById(userId,contactId)
        store.dispatch({ type: SET_CONTACT, contact})
        // console.log("🚀 ~ file: user.actions.js:121 ~ loadContact ~ contact:", contact)
    } catch (error) {
        console.log('error:', error)
    }
}
export async function loadContacts(userId) {
    console.log('actions', userId);
    try {
        const contacts = await userService.queryContact(userId)
        store.dispatch({ type: SET_CONTACTS, contacts})
    } catch (error) {
        console.log('error:', error)
    }
}
export async function signup(cred) {
    try {
        const user = await userService.signup(cred)
        store.dispatch({ type: SET_USER, user})
    } catch (error) {
        console.log('error:', error)
    }
}
export async function login(cred) {
    try {
        const user = await userService.login(cred)
        store.dispatch({ type: SET_USER, user})
        return Promise.resolve()
    } catch (error) {
        console.log('error:', error)
    }
}
export async function logout() {
    try {
        await userService.logout()
        store.dispatch({ type: LOGOUT})
    } catch (error) {
        console.log('error:', error)
    }
}


import { store } from "../store";
import {ADD_MOVE,REMOVE_CONTACT,ADD_CONTACT, REMOVE_USER,ADD_USER,UPDATE_USER, SET_FILTER_BY, SET_USERS } from "../reducers/user.reducer";
import { userService } from "../../services/user.service";

export async function loadUsers() {
    try {
        const filterBy = store.getState().userModule.filterBy
        const users = await userService.query(filterBy)
        const action = {
            type: SET_USERS,
            users
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)
    }

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
        await userService.updateUser(user)
        const action = {
            type: UPDATE_USER,
            user
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)   
    }
}
export async function addContact(contact) {
    try {
        const userId = store.getState().userModule.loggedinUser._id
        await userService.addContact(userId,contact)
        const action = {
            type: ADD_CONTACT,
            user
        }
        store.dispatch(action)
    } catch (error) {
        console.log('error:', error)   
    }
}
export async function removeContact(contactId) {
    try {
        const userId = store.getState().userModule.loggedinUser._id
        await userService.removeContact(userId,contactId)
        const action = {
            type: REMOVE_CONTACT,
            user
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
        await userService.addMove(move)
        store.dispatch({ type: ADD_MOVE, move})
    } catch (error) {
        console.log('error:', error)
    }
}
export async function signup(move) {
    try {
        await userService.signup(move)
        store.dispatch({ type: ADD_MOVE, move})
    } catch (error) {
        console.log('error:', error)
    }
}
export async function login(cred) {
    try {
        await userService.login(cred)
        store.dispatch({ type: ADD_MOVE, move})
    } catch (error) {
        console.log('error:', error)
    }
}
export async function logout(cred) {
    try {
        await userService.logout(cred)
        store.dispatch({ type: ADD_MOVE, move})
    } catch (error) {
        console.log('error:', error)
    }
}


import { store } from "../store";
import {LOGOUT,SET_USER,ADD_MOVE,REMOVE_CONTACT,ADD_CONTACT, REMOVE_USER,ADD_USER,UPDATE_USER, SET_FILTER_BY, SET_USERS } from "../reducers/user.reducer";
// import { userService } from "../../services/user.service";
import { userService } from "../../services/user.service.local";

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
export async function signup(cred) {
    console.log('11111111111signup store actions');
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


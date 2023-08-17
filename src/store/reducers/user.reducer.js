import { userService } from "../../services/user.service"

export const SET_USERS = 'SET_USERS'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_MOVE = 'ADD_MOVE'
export const SET_FILTER_BY = 'SET_FILTER_BY'



const initialState = {
    loggedinUser: userService.getLoggedinUser(),
    users: null,
    filterBy: {
        term: ''
    }
}

export function userReducer(state = initialState, action = {}) {
    const { loggedinUser } = state
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            }
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => user._id === action.user._id ? action.user : user)
            }
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        case ADD_CONTACT:
            let loggedinUser = { ...state.loggedinUser, contacts: [...state.loggedinUser.contacts, action.contact] }
            return {
                ...state,
                loggedinUser,
                users: state.users.map(user => user._id === loggedinUser._id ? loggedinUser : user)

            }
        case REMOVE_CONTACT:
             loggedinUser = { ...state.loggedinUser, contacts: state.loggedinUser.contacts.filter(c => c._id !== action.contactId) }
            return {
                ...state,
                loggedinUser,
                users: state.users.map(user => user._id === loggedinUser._id ? loggedinUser : user)

            }
        case ADD_MOVE:
             loggedinUser = { ...state.loggedinUser, coins: state.loggedinUser.coins - action.move.amount, moves: [...state.loggedinUser.moves, action.move] }
            const recipient = {...state.users.find(u => u._id === action.move.amount)}
           
            return {
                ...state,
                loggedinUser,
                users: state.users.map(user => {
                    if (user._id === loggedinUser._id) return loggedinUser
                    if (user._id === recipient._id) return {...recipient, coins: recipient.coins-action.move.amount, moves: [...recipient.moves, action.move]}
                    return user
                })

            }

        default:
            return state;
    }
}
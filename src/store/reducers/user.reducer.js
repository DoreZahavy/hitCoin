import { userService } from "../../services/user.service.local"

export const SET_USERS = 'SET_USERS'
export const SET_USER = 'SET_USER'
export const LOGOUT = 'LOGOUT'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_MOVE = 'ADD_MOVE'
export const SET_CONTACT = 'SET_CONTACT'
export const SET_CONTACTS = 'SET_CONTACTS'
export const SET_MOVES = 'SET_MOVES'
export const SET_MODAL = 'SET_MODAL'
export const SET_FILTER_BY = 'SET_FILTER_BY'



const initialState = {
    loggedinUser: userService.getLoggedinUser(),
    users: null,
    contacts: null,
    moves:[],
    contactDetails:null,
    contactModal:'',
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
        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.contacts
            }
        case SET_MODAL:
            return {
                ...state,
                contactModal: action.modal
            }
        case SET_USER:
            return {
                ...state,
                loggedinUser: action.user
            }
        case SET_CONTACT:
            return {
                ...state,
                contactDetails: action.contact
            }
        case LOGOUT:
            return {
                ...state,
                loggedinUser: null
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
            let loggedinUser = { ...state.loggedinUser, contacts: [...state.loggedinUser.contacts, action.contact.id] }
            return {
                ...state,
                loggedinUser,
                contacts: [...state.contacts,action.contact]

            }
        case REMOVE_CONTACT:
             loggedinUser = { ...state.loggedinUser, contacts: state.loggedinUser.contacts.filter(c => c._id !== action.contactId) }
            return {
                ...state,
                loggedinUser,
                contacts: state.contacts.filter(contact => contact._id !== action.contactId)
            }
        case SET_MOVES:
            return {
                ...state,
                moves:action.moves,

            }
        case ADD_MOVE:
            //  loggedinUser = { ...state.loggedinUser, coins: state.loggedinUser.coins - action.move.amount, moves: [...state.loggedinUser.moves, action.move] }
            // const recipient = {...state.users.find(u => u._id === action.move.amount)}
        //    let moves = moves
        //    if(moves.length===3) moves = [action.move,moves[0],moves[1]]
            return {
                ...state,
                moves:[...state.moves,action.move]
                // loggedinUser:{...loggedinUser,moves:[action.move,...loggedinUser.moves],coins:(loggedinUser.coins-action.move.coins)},
                // contactDetails:{...contactDetails,moves:[action.move,...contactDetails.moves],coins:(contactDetails.coins+action.move.coins)}
            }

        default:
            return state;
    }
}
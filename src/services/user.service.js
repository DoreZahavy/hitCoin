import {httpService} from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser'

export const userService = {
  signup,
  logout,
  login,
  query,
  getUserById,
  getLoggedinUser,
  getEmptyCredentials,
  addMove,
  queryMoves,
  queryContact,
  getContactById,
  removeContact,
  addContact
}

async function query() {
  return await httpService.get('user')
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))

  return {
    _id: "5a56640269f443a5d64b32ca",
    name: "Ochoa Hyde",
    email: "ochoahyde@renovize.com",
    phone: "+1 (968) 593-3824",
    coins: 100,
    moves: [],
    contacts: [
      {
        _id: "5a5664025f6ae9aa24a99fde",
        name: "Hallie Mclean",
        email: "halliemclean@renovize.com",
        phone: "+1 (948) 464-2888",
      },
      {
        _id: "5a56640252d6acddd183d319",
        name: "Parsons Norris",
        email: "parsonsnorris@renovize.com",
        phone: "+1 (958) 502-3495",
      },
      {
        _id: "5a566402ed1cf349f0b47b4d",
        name: "Rachel Lowe",
        email: "rachellowe@renovize.com",
        phone: "+1 (911) 475-2312",
      },
      {
        _id: "5a566402abce24c6bfe4699d",
        name: "Dominique Soto",
        email: "dominiquesoto@renovize.com",
        phone: "+1 (807) 551-3258",
      },
      {
        _id: "5a566402a6499c1d4da9220a",
        name: "Shana Pope",
        email: "shanapope@renovize.com",
        phone: "+1 (970) 527-3082",
      },
      {
        _id: "5a566402f90ae30e97f990db",
        name: "Faulkner Flores",
        email: "faulknerflores@renovize.com",
        phone: "+1 (952) 501-2678",
      },
      {
        _id: "5a5664027bae84ef280ffbdf",
        name: "Holder Bean",
        email: "holderbean@renovize.com",
        phone: "+1 (989) 503-2663",
      },
      {
        _id: "5a566402e3b846c5f6aec652",
        name: "Rosanne Shelton",
        email: "rosanneshelton@renovize.com",
        phone: "+1 (968) 454-3851",
      },
      {
        _id: "5a56640272c7dcdf59c3d411",
        name: "Pamela Nolan",
        email: "pamelanolan@renovize.com",
        phone: "+1 (986) 545-2166",
      },
      {
        _id: "5a5664029a8dd82a6178b15f",
        name: "Roy Cantu",
        email: "roycantu@renovize.com",
        phone: "+1 (929) 571-2295",
      },
      {
        _id: "5a5664028c096d08eeb13a8a",
        name: "Ollie Christian",
        email: "olliechristian@renovize.com",
        phone: "+1 (977) 419-3550",
      },
      {
        _id: "5a5664026c53582bb9ebe9d1",
        name: "Nguyen Walls",
        email: "nguyenwalls@renovize.com",
        phone: "+1 (963) 471-3181",
      },
      {
        _id: "5a56640298ab77236845b82b",

        name: "Glenna Santana",
        email: "glennasantana@renovize.com",
        phone: "+1 (860) 467-2376",
      },
      {
        _id: "5a56640208fba3e8ecb97305",
        name: "Malone Clark",
        email: "maloneclark@renovize.com",
        phone: "+1 (818) 565-2557",
      },
      {
        _id: "5a566402abb3146207bc4ec5",
        name: "Floyd Rutledge",
        email: "floydrutledge@renovize.com",
        phone: "+1 (807) 597-3629",
      },
      {
        _id: "5a56640298500fead8cb1ee5",
        name: "Grace James",
        email: "gracejames@renovize.com",
        phone: "+1 (959) 525-2529",
      },
      {
        _id: "5a56640243427b8f8445231e",
        name: "Tanner Gates",
        email: "tannergates@renovize.com",
        phone: "+1 (978) 591-2291",
      },
      {
        _id: "5a5664025c3abdad6f5e098c",
        name: "Lilly Conner",
        email: "lillyconner@renovize.com",
        phone: "+1 (842) 587-3812",
      },
    ],
  }
}

async function login({ email, password }) {
  const user = await httpService.post(`auth/login`, { email, password })
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user

}

async function signup({ email, password, phone, name }) {

  const user = await httpService.post(`auth/signup`, { email, password, phone, name })
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user

}

async function logout() {
  await httpService.post(`auth/logout`)
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}
async function addMove(move) {
  await httpService.post(`move`, move)
}
async function queryMoves(userId) {
  return await httpService.get(`move/${userId}`)
}
async function getUserById(userId) {
  const user = await httpService.get(`user/` + userId)
  return user
}

function getEmptyCredentials() {
  return {
    username: '',
    password: '',
    fullname: ''
  }
}



function filter(term) {
  term = term.toLocaleLowerCase()
  return contacts.filter((contact) => {
    return (
      contact.name.toLocaleLowerCase().includes(term) ||
      contact.phone.toLocaleLowerCase().includes(term) ||
      contact.email.toLocaleLowerCase().includes(term)
    )
  })
}

async function queryContact(userId) {
  console.log('user service', userId);
  return await httpService.get(`contact/${userId}`)
}
async function getContactById(userId,contactId) {
  return await httpService.get(`contact/${userId}/${contactId}`)
}
async function removeContact(userId,contactId) {
  return await httpService.del(`contact/${userId}/${contactId}`)
}
async function addContact(userId,contactId) {
  return await httpService.del(`contact/${userId}/${contactId}`)
}



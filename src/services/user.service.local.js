import { storageService } from './async-storage.service'


const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedInUser'

_createUsers()

export const userService = {
  getLoggedinUser,
  signup,
  logout,
  login,
  getEmptyCredentials,
  addMove,
  getUserById,
  getContactById,
  query,
}

async function query() {
  return storageService.query(USER_KEY)
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))


}

async function login({ email, password }) {
  const users = await query()
  const user = users.find(u => u.email === email && u.password === password)
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user

}

async function signup({ email, password, phone, name }) {
  const newUser = _createUser(email, password, phone, name)
  await save(newUser)
  // const user = await httpService.post(`auth/signup`, { email, password, phone, name })
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user

}

async function logout() {
  // await httpService.post(`auth/logout`)
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}
async function addMove(move) {

}
async function getUserById(userId) {
  return await storageService.get(USER_KEY, userId)
}

function getEmptyCredentials() {
  return {
    username: '',
    password: '',
    fullname: ''
  }
}

function getEmptyContact() {
  return {
    name: "",
    email: "",
    phone: "",
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

function getContactById(contactId) {
  const user = getLoggedinUser()

  return user.contacts.find(c => +c.id === +contactId)

}

async function remove(userId) {
  return await storageService.remove(USER_KEY, userId)
}

async function save(user) {
  if (user.id) {
    return await storageService.put(USER_KEY, user)
  } else {
    return await storageService.post(USER_KEY, user)
  }
}

function _createUser(email, password, phone, name) {
  return {
    email,
    password,
    phone,
    name,
    coins: 100,
    moves: [],
    contacts: []
  }
}

function _createUsers() {
  let users = utilService.loadFromStorage(USER_KEY)
  if (!users || !users.length) {
    users = [
      {
        id: "5a566402f90ae30e97f99123",
        name: "Eleanor Holmes",
        email: "eleanorholmes@renovize.com",
        phone: "+1 (123) 456-7890",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402abcde123456789ab",
        name: "Lucas Foster",
        email: "lucasfoster@renovize.com",
        phone: "+1 (234) 567-8901",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664020123456789abcdef",
        name: "Olivia Reed",
        email: "oliviareed@renovize.com",
        phone: "+1 (345) 678-9012",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640234567890abcdef12",
        name: "Isaac Patterson",
        email: "isaacpatterson@renovize.com",
        phone: "+1 (456) 789-0123",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640267890abcdef12345",
        name: "Sophia Johnson",
        email: "sophiajohnson@renovize.com",
        phone: "+1 (567) 890-1234",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640290abcdef12345678",
        name: "Aiden Green",
        email: "aidengreen@renovize.com",
        phone: "+1 (678) 901-2345",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402abcdef1234567890",
        name: "Ava Brown",
        email: "avabrown@renovize.com",
        phone: "+1 (789) 012-3456",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664021234567890abcdef",
        name: "Mason Jackson",
        email: "masonjackson@renovize.com",
        phone: "+1 (890) 123-4567",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402abcdef1234567890",
        name: "Emma Martinez",
        email: "emmamartinez@renovize.com",
        phone: "+1 (901) 234-5678",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640290abcdef12345678",
        name: "Noah Gray",
        email: "noahgray@renovize.com",
        phone: "+1 (012) 345-6789",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664021234567890abcdef",
        name: "Liam Coleman",
        email: "liamcoleman@renovize.com",
        phone: "+1 (123) 456-7890",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402abcdef1234567890",
        name: "Olivia Mitchell",
        email: "oliviamitchell@renovize.com",
        phone: "+1 (234) 567-8901",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640290abcdef12345678",
        name: "Lucas Walker",
        email: "lucaswalker@renovize.com",
        phone: "+1 (345) 678-9012",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402abcdef1234567890",
        name: "Sophia Wright",
        email: "sophiawright@renovize.com",
        phone: "+1 (456) 789-0123",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640290abcdef12345678",
        name: "Aiden Lewis",
        email: "aidenlewis@renovize.com",
        phone: "+1 (567) 890-1234",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402abcdef1234567890",
        name: "Emma Hall",
        email: "emmahall@renovize.com",
        phone: "+1 (678) 901-2345",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664021234567890abcdef",
        name: "Mason Young",
        email: "masonyoung@renovize.com",
        phone: "+1 (789) 012-3456",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402abcdef1234567890",
        name: "Oliver King",
        email: "oliverking@renovize.com",
        phone: "+1 (890) 123-4567",
        user: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640290abcdef12345678",
        name: "Sophia Turner",
        email: "sophiaturner@renovize.com",
        phone: "+1 (901) 234-5678",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640269f443a5d64b32ca",
        name: "Ochoa Hyde",
        email: "ochoahyde@renovize.com",
        phone: "+1 (968) 593-3824",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664025f6ae9aa24a99fde",
        name: "Hallie Mclean",
        email: "halliemclean@renovize.com",
        phone: "+1 (948) 464-2888",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640252d6acddd183d319",
        name: "Parsons Norris",
        email: "parsonsnorris@renovize.com",
        phone: "+1 (958) 502-3495",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402ed1cf349f0b47b4d",
        name: "Rachel Lowe",
        email: "rachellowe@renovize.com",
        phone: "+1 (911) 475-2312",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402abce24c6bfe4699d",
        name: "Dominique Soto",
        email: "dominiquesoto@renovize.com",
        phone: "+1 (807) 551-3258",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402a6499c1d4da9220a",
        name: "Shana Pope",
        email: "shanapope@renovize.com",
        phone: "+1 (970) 527-3082",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402f90ae30e97f990db",
        name: "Faulkner Flores",
        email: "faulknerflores@renovize.com",
        phone: "+1 (952) 501-2678",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664027bae84ef280ffbdf",
        name: "Holder Bean",
        email: "holderbean@renovize.com",
        phone: "+1 (989) 503-2663",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402e3b846c5f6aec652",
        name: "Rosanne Shelton",
        email: "rosanneshelton@renovize.com",
        phone: "+1 (968) 454-3851",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640272c7dcdf59c3d411",
        name: "Pamela Nolan",
        email: "pamelanolan@renovize.com",
        phone: "+1 (986) 545-2166",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664029a8dd82a6178b15f",
        name: "Roy Cantu",
        email: "roycantu@renovize.com",
        phone: "+1 (929) 571-2295",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664028c096d08eeb13a8a",
        name: "Ollie Christian",
        email: "olliechristian@renovize.com",
        phone: "+1 (977) 419-3550",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664026c53582bb9ebe9d1",
        name: "Nguyen Walls",
        email: "nguyenwalls@renovize.com",
        phone: "+1 (963) 471-3181",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640298ab77236845b82b",
        name: "Glenna Santana",
        email: "glennasantana@renovize.com",
        phone: "+1 (860) 467-2376",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640208fba3e8ecb97305",
        name: "Malone Clark",
        email: "maloneclark@renovize.com",
        phone: "+1 (818) 565-2557",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a566402abb3146207bc4ec5",
        name: "Floyd Rutledge",
        email: "floydrutledge@renovize.com",
        phone: "+1 (807) 597-3629",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640298500fead8cb1ee5",
        name: "Grace James",
        email: "gracejames@renovize.com",
        phone: "+1 (959) 525-2529",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a56640243427b8f8445231e",
        name: "Tanner Gates",
        email: "tannergates@renovize.com",
        phone: "+1 (978) 591-2291",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664025c3abdad6f5e098c",
        name: "Lilly Conner",
        email: "lillyconner@renovize.com",
        phone: "+1 (842) 587-3812",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: []
      },
      {
        id: "5a5664025c3abdad6f5e098c",
        name: "Guest",
        email: "guest@renovize.com",
        phone: "+1 (555) 555-5555",
        password: "password1",
        coins: 100,
        moves: [],
        contacts: [{
          id: "5a566402abcde123456789ab",
          name: "Lucas Foster",
          email: "lucasfoster@renovize.com",
          phone: "+1 (234) 567-8901",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a5664020123456789abcdef",
          name: "Olivia Reed",
          email: "oliviareed@renovize.com",
          phone: "+1 (345) 678-9012",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a56640234567890abcdef12",
          name: "Isaac Patterson",
          email: "isaacpatterson@renovize.com",
          phone: "+1 (456) 789-0123",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a56640267890abcdef12345",
          name: "Sophia Johnson",
          email: "sophiajohnson@renovize.com",
          phone: "+1 (567) 890-1234",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a56640290abcdef12345678",
          name: "Aiden Green",
          email: "aidengreen@renovize.com",
          phone: "+1 (678) 901-2345",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a566402abcdef1234567890",
          name: "Ava Brown",
          email: "avabrown@renovize.com",
          phone: "+1 (789) 012-3456",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a5664021234567890abcdef",
          name: "Mason Jackson",
          email: "masonjackson@renovize.com",
          phone: "+1 (890) 123-4567",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a566402abcdef1234567890",
          name: "Emma Martinez",
          email: "emmamartinez@renovize.com",
          phone: "+1 (901) 234-5678",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a56640290abcdef12345678",
          name: "Noah Gray",
          email: "noahgray@renovize.com",
          phone: "+1 (012) 345-6789",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a5664021234567890abcdef",
          name: "Liam Coleman",
          email: "liamcoleman@renovize.com",
          phone: "+1 (123) 456-7890",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a566402abcdef1234567890",
          name: "Olivia Mitchell",
          email: "oliviamitchell@renovize.com",
          phone: "+1 (234) 567-8901",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a56640290abcdef12345678",
          name: "Lucas Walker",
          email: "lucaswalker@renovize.com",
          phone: "+1 (345) 678-9012",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a566402abcdef1234567890",
          name: "Sophia Wright",
          email: "sophiawright@renovize.com",
          phone: "+1 (456) 789-0123",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a56640290abcdef12345678",
          name: "Aiden Lewis",
          email: "aidenlewis@renovize.com",
          phone: "+1 (567) 890-1234",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a566402abcdef1234567890",
          name: "Emma Hall",
          email: "emmahall@renovize.com",
          phone: "+1 (678) 901-2345",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a5664021234567890abcdef",
          name: "Mason Young",
          email: "masonyoung@renovize.com",
          phone: "+1 (789) 012-3456",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a566402abcdef1234567890",
          name: "Oliver King",
          email: "oliverking@renovize.com",
          phone: "+1 (890) 123-4567",
          user: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a56640290abcdef12345678",
          name: "Sophia Turner",
          email: "sophiaturner@renovize.com",
          phone: "+1 (901) 234-5678",
          password: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a56640269f443a5d64b32ca",
          name: "Ochoa Hyde",
          email: "ochoahyde@renovize.com",
          phone: "+1 (968) 593-3824",
          password: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a5664025f6ae9aa24a99fde",
          name: "Hallie Mclean",
          email: "halliemclean@renovize.com",
          phone: "+1 (948) 464-2888",
          password: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },
        {
          id: "5a56640252d6acddd183d319",
          name: "Parsons Norris",
          email: "parsonsnorris@renovize.com",
          phone: "+1 (958) 502-3495",
          password: "password1",
          coins: 100,
          moves: [],
          contacts: []
        },]
      }
    ]
    utilService.saveToStorage(USER_KEY, users)
  }
}



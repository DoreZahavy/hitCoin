import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { AppHeader } from './cmps/AppHeader.jsx'
import { ContactIndex } from './views/ContactIndex.jsx'
import { ContactDetails } from './views/ContactDetails.jsx'
import { ContactEdit } from './views/ContactEdit.jsx'
import { ContactAdd } from './views/ContactAdd.jsx'
import { HomeView } from './views/HomeView.jsx'
import { StatisticsView } from './views/StatisticsView.jsx'
import { UserAuth } from './views/UserAuth.jsx'

import '../src/styles/styles.scss'
import { useEffect } from 'react'
import { loadUsers } from './store/actions/user.actions.js'
function App() {
  useEffect(()=>{
    loadUsers()
  },[])
  return (
    <Router>
      <section className="main-layout">
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/userauth" element={<UserAuth />} />
          <Route path="/statistics" element={<StatisticsView />} />
          <Route path="/contact" element={<ContactIndex />}>
            {/* <Route path="edit/:id?" element={<ContactEdit />} /> */}
            <Route path="add" element={<ContactAdd />} />
            <Route path=":id?" element={<ContactDetails />} />
          </Route>
        </Routes>
      </section>
    </Router>
  )
}

export default App

import { Navigate, HashRouter as Router, Routes, Route } from 'react-router-dom'

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
import { useSelector } from 'react-redux'
import { userService } from './services/user.service.local.js'

function RouteGuard({ children }) {
  const loggedinUser = userService.getLoggedinUser()
  if (!loggedinUser) return <Navigate to="/userauth" />
  return <>{children}</>
}

function App() {
  // const loggedinUser = useSelector((state) => state.userModule.loggedinUser)

  useEffect(() => {
    loadUsers()
  }, [])
  return (
    <Router>
      <section className="main-layout">
        <AppHeader />
        <Routes>
          <Route
            path="/"
            element={
              <RouteGuard>
                <HomeView />
              </RouteGuard>
            }
          />
          <Route path="/userauth" element={<UserAuth />} />
          <Route path="/statistics" element={<StatisticsView />} />
          <Route
            path="/contact"
            element={
              <RouteGuard>
                <ContactIndex />
              </RouteGuard>
            }
          >
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

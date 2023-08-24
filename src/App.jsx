// import { useState } from 'react'
import Todo from './components/Todo'
import Contacts from './components/Contacts'
import LandingPg from './components/LandingPg'
import Notes from './components/Notes'
import Nav from './components/Nav'
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <Routers>
      <Nav />
      <Routes>
        <Route index element={<LandingPg />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        {/* <Route path="/notes" element={<ErrorPg />}></Route> */}

      {/* <Contacts /> */}
      </Routes>
    </Routers>
  )
}

export default App

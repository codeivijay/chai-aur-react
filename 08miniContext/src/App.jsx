import React from 'react'
import { Login, Profile } from './components'
import UserContexProvider from './context/UserContexProvider'

function App() {
  return (
    <UserContexProvider>
      <h1>React is one of the best Library to build SPA</h1>
      <Login/>
      <Profile/>
    </UserContexProvider>
  )
}

export default App

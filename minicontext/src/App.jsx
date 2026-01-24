import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React and Chai and share its important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

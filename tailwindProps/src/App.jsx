import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-700 text-black p-4 rounded-3xl mb-4'>THis is tailwind Demo</h1>
      <Card SceneName="Beautiful Scene" />
      <Card SceneName='Vibrant Scene' />
    </>
  )
}

export default App

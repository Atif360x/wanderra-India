import { useState } from 'react'
import Hero from './componants/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
    <Hero />
    </main>
  )
}

export default App

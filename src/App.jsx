import { useState } from 'react'
import Hero from './componants/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
    <Hero />
    {/* <div className='w-[100vw] h-[100vh]'>

    </div> */}
    </main>
  )
}

export default App

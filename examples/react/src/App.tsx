import createLightningElement from 'lighting-element'
import './App.scss'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    createLightningElement()
  }, [])

  return (
    <div>
      <button className='lighting-element'>button</button>
    </div>
  )
}

export default App

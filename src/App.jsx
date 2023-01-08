import { useState } from 'react'
import './App.css'
import AddProduct from './AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddProduct/>
    </div>
  )
}

export default App

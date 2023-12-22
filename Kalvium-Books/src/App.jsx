import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Books from './Components/Books'
import Form from './Components/Form'

function App() {

  const [search, setSearch] = useState("")
  const [showBooks , setShowBooks] = useState(true)
  const [showReg , setShowReg] = useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const displayBooks = () =>{
    setShowBooks(true)
    setShowReg(false)
  }

  const displayReg = () =>{
    setShowReg(true)
    setShowBooks(false)
  }

  return (
    <>
      <Navbar handleSearch={handleSearch} search={search} displayBooks={displayBooks} displayReg={displayReg} showBooks={showBooks} showReg={showReg}/>
      {showBooks && <Books search={search}/>}
      {showReg && <Form/>}
    </>
  )
}

export default App

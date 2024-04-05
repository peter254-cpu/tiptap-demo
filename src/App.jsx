import { useState } from 'react'
import './App.css'
import TipTap from './components/Tiptap'
import parser from 'html-react-parser'

const App = () => {
  const [desc, setDesc] = useState('')
  return (
    <div className='App'>
      <TipTap setDesc={setDesc} />
      <div className=''>{parser(desc)}</div>
    </div>
  )
}

export default App

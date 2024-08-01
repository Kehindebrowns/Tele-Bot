import { } from 'react'
import Button from './componets/Button/Button'
import './App.css'

 
// eslint-disable-next-line no-undef
require('../db/db')
function App() {


  return (
    <>
    <h1> Telegram App !</h1>
    <Button>
   title = {"Test"}
   disable = {false}
   type ={"add"}
  </Button>

    <Button>
   title = {"Remove"}
   disable = {false}
   type ={"remove"}
  </Button>

    <Button>
   title = {"CheckOut"}
   disable = {false}
   type ={"checkout"}
  </Button>
    </>
  )
}

export default App;

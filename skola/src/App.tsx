import NavBar from './components/NavBar'
import Cards from './components/Card'
import './App.css'

function App() {
 

  const cardsData = [
    { text: "HEJ" },
    { text: "PÅ" },
    { text: "DIG" }
  ];

  return (
    <>

    <NavBar/>

    <Cards cards={cardsData}/>
    
    
    </>
    
  )
}

export default App

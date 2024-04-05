import NavBar from './components/Navbar/NavBar'
import Cards from './components/Cards/Card'
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

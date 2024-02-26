import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [response, setResponse] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchCharacters = async() => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    setResponse(response.data.abilities)
    setLoading(false)
    
  }

  useEffect( () => {
    fetchCharacters()
  },[])
  
  if(loading) return <>Loading</>
  console.log(response[0])
  return <>
  {response.map((item) => {
    return <div key={item.ability.name}> {item.ability.name} </div>
  })}
  
  </>

}

export default App;

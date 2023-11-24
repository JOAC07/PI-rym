import './App.css';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/NavBar.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/about/About.jsx'
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';

const USER_EMAIL = 'hola@gmail.com'
const USER_PASSWORD = 'hola123'

function App() {
   const[characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const [acces, setAcces] = useState(false);
   const navigate = useNavigate();// fn(){...}

   const APIKEY = 'pi-joac07'

   //aca conecto con la API
   function onSearch(id) {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   //esta func devuelve un arreglo con los dif y filtra los id repetidos
   function onClose(id){
    setCharacters ( characters.filter((character) => character.id !== Number(id)))
   }

   const login = (userData)=>{
      if(userData.password === USER_PASSWORD && userData.email === USER_EMAIL){
         setAcces(true)
         navigate('/home')
      }
   }

   useEffect (()=>{
      !acces && navigate('/');
   },[acces])

  return (
     <div className='App'>
        {pathname !== '/' && <NavBar onSearch={onSearch}/>}            
         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>      
     </div>
  )
}

export default App

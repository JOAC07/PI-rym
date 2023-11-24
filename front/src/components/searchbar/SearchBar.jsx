import { useState } from "react";
const SearchBar = ({onSearch}) => {

   const [id, setId] = useState('')

   function handleChange(event){
      setId(event.target.value); //tomo el valor del evento del elemeto que disparo el evento
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange} />
         <button onClick={()=>onSearch(id)}>agregar</button>
      </div>
   );
}

export default SearchBar;

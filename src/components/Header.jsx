
import { useState } from 'react';

const Header=({title})=> {

  // const [name, setName] = useState("Dan")

  //   const handleNameChange=()=>{
  //   const names= ['Kim','Oscar','Evans']
  //   const randomName= Math.floor(Math.random() * names.length)
  //   setName(names[randomName])
  // }

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps={
  title:"DEFAULT TITLE"
}
export default Header;

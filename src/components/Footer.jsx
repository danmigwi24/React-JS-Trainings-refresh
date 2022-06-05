
const Footer=({title})=> {

  // const [name, setName] = useState("Dan")

  //   const handleNameChange=()=>{
  //   const names= ['Kim','Oscar','Evans']
  //   const randomName= Math.floor(Math.random() * names.length)
  //   setName(names[randomName])
  // }

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

Footer.defaultProps={
  title:"FOOTER"
}
export default Footer;

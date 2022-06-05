
import ItemList from './ItemList';
const ContentFetchApi = ({
  items,
  handleCheck,
  handleDelete,
}) => {

  return (
    <div >
      <main>
        {
          items.length ? (
            <ItemList
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete} />
          ) : (
            <p style={{ marginTop: '2rem' }}>
              Your List is Empty
            </p>
          )
        }

      </main>
    </div>
  );


  /*
   <div >
      
      <p>
        Hello {name}
      </p>
      <button onClick={handleNameChange}>
        Change Name
      </button>
    </div>

  const [name, setName] = useState("Dan")

  const handleNameChange=()=>{
    const names= ['Kim','Oscar','Evans']
    const randomName= Math.floor(Math.random() * names.length)
    setName(names[randomName])
  }
*/
}

export default ContentFetchApi;


import { useState } from 'react';
import { FaTrash } from 'react-icons/fa'
const Content = () => {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga, atque distinctio earum dolores labore amet deserunt sapiente laudantium quo."
    },
    {
      id: 2,
      checked: false,
      item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga, atque distinctio earum dolores labore amet deserunt sapiente laudantium quo."
    },
    {
      id: 3,
      checked: false,
      item: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fuga, atque distinctio earum dolores labore amet deserunt sapiente laudantium quo."
    }
  ])

  const handleCheck = (id) => {
    const listItems = items.map(item => (
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
    setItems(listItems)
    // Store in local storange
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))

  }


  const handleDelete = (id) => {
    const listItems = items.filter(item => (
      item.id !== id
    ))
    setItems(listItems)
    // Store in local storange
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))

  }
  return (
    <div >
      <main>
        {
          items.length ? (
            <ul>
            {
              items.map(item => (
                <li key={item.id}>
                  {/* INPUT */}
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
                  />
                  {/* LABEL */}
                  <label
                    style={(item.checked) ? { textDecoration: 'line-through' } : null}
                    onDoubleClick={() => handleCheck(item.id)}
                    className="text-2xl font-serif text-blue-700">
                    {item.item}
                  </label>
                  {/* FaTrash From React Icons */}
                  <FaTrash
                    onClick={() => handleDelete(item.id)}
                    role='button'
                    tabIndex='0'
                    className="bg-blue-300 border-2 rounded border-white p-10"
                  />
                </li>
              ))
            }
          </ul>
          ): (
            <p style={{marginTop:'2rem'}}>
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

export default Content;

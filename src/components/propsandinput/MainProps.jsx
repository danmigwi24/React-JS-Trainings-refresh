import React, { useState } from 'react'
import AddItem from './PropsAddItem'
import PropsDrilling from './PropsDrilling'
import SearchItem from './PropsSearchItem'

const MainProps = () => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))

    const [newItem, setNewItem] = useState('')
    const [searchItem, setSearchItem] = useState('')

    // useEffect(()=>{
    //     localStorage.setItem('shoppinglist', JSON.stringify(items))
    // },[items])
    //YOU can also Use this  or use effect
    const storeInLocalStorage = (newItem) => {
        setItems(newItem)
        // Store in local storange
        localStorage.setItem('shoppinglist', JSON.stringify(newItem))
    }

    const handleCheck = (id) => {
        const listItems = items.map(item => (
            item.id === id ? { ...item, checked: !item.checked } : item
        ))
        storeInLocalStorage(listItems)

    }


    const handleDelete = (id) => {
        const listItems = items.filter(item => (
            item.id !== id
        ))
        storeInLocalStorage(listItems)

    }
    const addItem = (item) => {
        const newItemId = items.length ? items[items.length - 1].id + 1 : 1

        const myNewItem = {
            id: newItemId,
            checked: false,
            item: item
        }
        const listItems = [...items, myNewItem]
        storeInLocalStorage(listItems)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newItem) return
        //Add new Item
        addItem(newItem)
        setNewItem('')
    }


    return (
        <div>
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem
                searchItem={searchItem}
                setSearchItem={setSearchItem}
            />
            <PropsDrilling
                items={items.filter(item => (
                    ((item.item).toLowerCase()).includes(searchItem.toLowerCase())
                ))}
                setItems={setItems}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            <h2>{items.length} List {items.length == 1 ? 'Item' : "Items"}</h2>
        </div>
    )
}

export default MainProps
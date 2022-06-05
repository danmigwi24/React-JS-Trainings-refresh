import React, { useEffect, useState } from 'react'
import AddItem from './AddItem'
import apiRequest from './apiRequest'
import ContentFetchApi from './ContentFetchApi'
import SearchItem from './SearchItem'

const AppMainFetchApi = () => {

    const API_URL = 'http://localhost:3500/items'

    const [items, setItems] = useState([])

    const [newItem, setNewItem] = useState('')
    const [searchItem, setSearchItem] = useState('')
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Did not receive expected data')
                const listItems = await response.json()
                setItems(listItems)
                setFetchError(null)
            } catch (error) {
                console.log(error);
                setFetchError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        setTimeout(() => {
            (async () => await fetchItems())();
        },
            2000
        )


    }, [])



    const handleCheck = async (id) => {
        const listItems = items.map(item => (
            item.id === id ? { ...item, checked: !item.checked } : item
        ))
        setItems(listItems)


        const myItem = listItems.filter((item) => item.id === id)
        
        const updateOptions = {
            method: 'PATCH',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({ checked: myItem[0].checked })
        };

        console.log(JSON.stringify({ checked: myItem[0].checked }));
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);

        if (result) setFetchError(result)

    }


    const handleDelete = async(id) => {
        const listItems = items.filter(item => (
            item.id !== id
        ))
        setItems(listItems)


        const deleteOptions = {
            method: 'DELETE'
        };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, deleteOptions);

        if (result) setFetchError(result)

    }
    const addItem = async (itemName) => {
        const newItemId = items.length ? items[items.length - 1].id + 1 : 1

        const myNewItem = {
            id:newItemId,
            checked: true,
            item: itemName
        }
        const listItems = [...items, myNewItem]
        setItems(listItems)

        console.log(myNewItem);

        const postOptions = {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(myNewItem)
        }

        const result = await apiRequest(API_URL, postOptions)
        if (result) setFetchError(result);

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
            <main>
                {isLoading && <p>{`Loading Items...`}</p>}
                {fetchError && <p style={{ color: "red" }}>{`Error ${fetchError}`}</p>}
                {!fetchError && !isLoading &&
                    <ContentFetchApi
                        items={items
                            //     .filter(item => (
                            //     ((item.item).toLowerCase()).includes(searchItem.toLowerCase())
                            // ))
                        }
                        setItems={setItems}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                }
            </main>
            <h2>{items.length} List {items.length == 1 ? 'Item' : "Items"}</h2>
        </div>
    )
}

export default AppMainFetchApi
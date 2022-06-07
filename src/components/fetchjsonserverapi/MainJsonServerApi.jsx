import React, { useState, useEffect } from 'react'
import FormJsonServerApi from './FormJsonServerApi'
import ListJsonServerApi from './jsonform/ListJsonServerApi'
import TableJsonServerApi from './tableform/TableJsonServerApi'

const MainJsonServerApi = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/'
    const [reqType, setReqType] = useState('users')
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}${reqType}`)
                const data = await response.json();
                setItems(data)
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }


        fetchItems()
    }, [reqType])

    return (
        <div>
            <FormJsonServerApi
                reqType={reqType}
                setReqType={setReqType} />
            {/* <ListJsonServerApi
                items={items}
            /> */}
            <TableJsonServerApi
                items={items}
            />

            {/* <ul>
                {
                    items.map(item => (
                        <li key={item.id}>
                            <label>{item.name}<br /></label>
                            {JSON.stringify(item)}
                        </li>
                    ))
                }
            </ul> */}

        </div>
    )
}

export default MainJsonServerApi
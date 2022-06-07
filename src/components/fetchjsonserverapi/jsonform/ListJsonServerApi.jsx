import React from 'react'

const ListJsonServerApi = ({ items }) => {
    return (
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>
                        <label>{item.name || item.title}<br /></label>
                        {JSON.stringify(item)}
                        <hr></hr>
                    </li>
                ))
            }
        </ul>
    )
}

export default ListJsonServerApi
import React from 'react'
import LineItem from './PropsLineItem'
const ItemList = ({ items,
    handleCheck,
    handleDelete, }) => {
    return (
        <div>
            <ul>
                {
                    items.map(item => (
                        <LineItem
                            key={item.id}
                            item={item}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemList
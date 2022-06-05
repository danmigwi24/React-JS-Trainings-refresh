import React from 'react'


import { FaTrash } from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <div>
            <li>
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
        </div>
    )
}

export default LineItem
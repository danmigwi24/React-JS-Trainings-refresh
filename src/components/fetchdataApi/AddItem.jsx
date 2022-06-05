import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({
    newItem, setNewItem, handleSubmit
}) => {
    const inputRef = useRef()
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="addItem">
                    Add Item
                </label>
                <input
                    ref={inputRef}
                    autoFocus
                    type="text"
                    id="addItem"
                    placeholder='Add Item'
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)} />

                <button
                    type='submit'
                    aria-label='Add Item'
                    onClick={() => inputRef.current.focus()}
                >
                    <FaPlus />

                </button>
            </form>
        </div>
    )
}

export default AddItem
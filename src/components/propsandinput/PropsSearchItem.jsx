


const SearchItem = ({ searchItem, setSearchItem }) => {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">
                    Search
                </label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder='Search'
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchItem
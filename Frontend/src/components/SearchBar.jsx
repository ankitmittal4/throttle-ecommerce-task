function SearchBar({ query, setQuery }) {
    return (
        <input
            type="text"
            placeholder="Search..."
            className="border p-2 w-full mb-4 rounded"
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
    );
}

export default SearchBar;

const SearchBar = ({ handleSubmit }) => {
  return (
    <form className="search-bar d-flex" onSubmit={handleSubmit}>
			<input
				placeholder="Enter a city name"
				type="text"
				className="search-input container"
				name="city"
				autoComplete="off"
			/>
			<button className="search-button btn">Search</button>
    </form>
  );
};

export default SearchBar;

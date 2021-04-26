import React from 'react';

const SearchBar = ({
  searchTerm, setSearchTerm, submitSearch, displayResults, toggleResults, refreshQuestions,
}) => {
  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleShowAllClick = (event) => {
    event.preventDefault();
    toggleResults();
    refreshQuestions();
  };

  if (displayResults) {
    return (
      <form onSubmit={submitSearch}>
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for questions here" />
        <button type="submit"> Search </button>
        <button type="button" onClick={handleShowAllClick}>Show All Questions</button>
      </form>
    );
  }
  return (
    <form onSubmit={submitSearch}>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for questions here" />
      <button type="submit"> Search </button>
    </form>
  );
};

export default SearchBar;

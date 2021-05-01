import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleShowAllClick = (event) => {
    event.preventDefault();
    setSearchTerm('');
  };

  const ShowAllBtn = () => {
    if (searchTerm.length >= 3) {
      return (
        <button type="button" onClick={handleShowAllClick}>Show All Questions</button>
      );
    }
    return (
      <div />
    );
  };

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for questions here" />
      {ShowAllBtn()}
    </form>
  );
};

export default SearchBar;

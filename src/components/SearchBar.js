import { useState } from "react";
import SearchBarCSS from './SearchBar.css'

function Search({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleFormChange = (event) => {
      setTerm(event.target.value);

  };

  return (
    <div className="search-bar">
          <form onSubmit={handleFormSubmit}>
              <label className="search-bar-title">Enter Search Term</label>
        <input  className="actual-bar" value={term} onChange={handleFormChange} />
      </form>
    </div>
  );
}

export default Search;

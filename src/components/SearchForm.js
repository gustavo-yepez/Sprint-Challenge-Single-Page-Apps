import React, { useState,useEffect  } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({people}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({people});



  useEffect(() => {
    const results = people.filter(people => {

      return people.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


return (
  <section className="search-form">
     // Add a search form here
      <form>
    <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>




    </section>
  );
}
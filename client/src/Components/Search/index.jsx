import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "./styledSearch";

function Search() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form>
      <input
        type="text"
        name="name"
        placeholder="pokemon"
        onChange={handleChange}
      />
      <Link to={`/pokemon/search/${name}`}>
        <button>Search</button>
      </Link>
    </Form>
  );
}

export default Search;

import React from "react";
import { Form } from "./styledSearch";

function Search() {
  return (
    <Form>
      <input type="text" name="name" placeholder="pokemon" />
      <button>Search</button>
    </Form>
  );
}

export default Search;

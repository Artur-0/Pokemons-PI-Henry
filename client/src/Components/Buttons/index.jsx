import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterPokemons,
  getTypes,
  sortByAttack,
  sortByName,
} from "../../Redux/Actions/actions";
import { Select, FilterSort } from "./styledButtons";

function Buttons() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // const [ascDsc, setAscDsc] = useState(false);
  const ascDsc = false;
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  useEffect(() => {
    if (state.error.length > 0) {
      alert("pokemon not found");
    }
  }, [state.error]);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "name") {
      return dispatch(sortByName(ascDsc ? "dsc" : "asc"));
      // setAscDsc(!ascDsc);
    }
    if (e.target.value === "attack") {
      return dispatch(sortByAttack(ascDsc ? "asc" : "dsc"));
      // setAscDsc(!ascDsc);
    } else return dispatch(filterPokemons(e.target.value));
  };

  return (
    <FilterSort>
      <Select name="sort" value="sort" onChange={(e) => handleChange(e)}>
        <option>Sort by</option>
        <option value="name">Name</option>
        <option value="attack">Attack</option>
      </Select>

      <Select name="filter" value="filter" onChange={(e) => handleChange(e)}>
        <option>Filter by</option>
        <option value="created">Created</option>
        <option value="original">Original</option>
        {state.types.map((t) => {
          return (
            <option key={t.id} value={t.name}>
              {t.name}
            </option>
          );
        })}
      </Select>
    </FilterSort>
  );
}

export default Buttons;

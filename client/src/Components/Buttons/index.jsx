import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterPokemons,
  getTypes,
  sortByAttack,
  sortByName,
} from "../../Redux/Actions/actions";
import { LiButton } from "./styledButtons";

function Buttons() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [showButtonFilter, setShowButtonFilter] = useState(false);
  const [showButtonSort, setShowButtonSort] = useState(false);
  const [ascDsc, setAscDsc] = useState(true);
  const handleFilter = (filter) => {
    dispatch(filterPokemons(filter));
  };
  useEffect(() => {
    if (showButtonFilter) {
      state.filteredPokemons.length < 1 &&
        alert("This type of pokemon was not found, try another filter!");
    }
  }, [state.filteredPokemons]);

  const handleSort = (order) => {
    if (order === "name") {
      dispatch(sortByName(ascDsc ? "dsc" : "asc"));
      setAscDsc(!ascDsc);
    }
    if (order === "attack") {
      dispatch(sortByAttack(ascDsc ? "dsc" : "asc"));
      setAscDsc(!ascDsc);
    }
  };

  return (
    <div>
      {showButtonSort ? (
        <>
          {" "}
          <button onClick={() => setShowButtonSort(!showButtonSort)}>
            Sort
          </button>
          <ul>
            <LiButton
              onClick={() => {
                handleSort("name");
              }}
            >
              name
            </LiButton>
            <LiButton
              onClick={() => {
                handleSort("attack");
              }}
            >
              attack
            </LiButton>
          </ul>
        </>
      ) : showButtonFilter ? (
        <>
          <button onClick={() => setShowButtonFilter(!showButtonFilter)}>
            Filter
          </button>
          <ul>
            <LiButton onClick={() => dispatch(filterPokemons("created"))}>
              created
            </LiButton>
            <LiButton onClick={() => dispatch(filterPokemons("existing"))}>
              existing
            </LiButton>
            {state.types.map((t) => {
              return (
                <LiButton key={t.id} onClick={() => handleFilter(t.name)}>
                  {t.name}
                </LiButton>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <button onClick={() => setShowButtonSort(!showButtonSort)}>
            Sort
          </button>
          <button
            onClick={() =>
              dispatch(getTypes()) && setShowButtonFilter(!showButtonFilter)
            }
          >
            Filter
          </button>
        </>
      )}
    </div>
  );
}

export default Buttons;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../Redux/Actions/actions";
import { Styled } from "./styledFooter";

function Pagination() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);

  useEffect(() => {
    state.pageNumber > 1 ? setDisablePrev(false) : setDisablePrev(true);
    state.pageNumber >= 4 ? setDisableNext(true) : setDisableNext(false);
    if (state.filteredPokemons.length) {
      state.filteredPokemons.length < 12 && setDisableNext(true);
      state.filteredPokemons.length > 12 &&
        state.filteredPokemons.length < 24 &&
        state.pageNumber === 2 &&
        setDisableNext(true);
    }
  }, [state]);

  return (
    <Styled>
      {state.pageNumber > 1 && (
        <button
          disabled={disablePrev}
          onClick={() => {
            dispatch(changePage("prev"));
          }}
        >
          Previous
        </button>
      )}

      <p>{state.pageNumber}</p>
      {state.pageNumber < 4 && (
        <button
          disabled={disableNext}
          onClick={() => {
            dispatch(changePage("next"));
          }}
        >
          Next
        </button>
      )}
    </Styled>
  );
}

export default Pagination;

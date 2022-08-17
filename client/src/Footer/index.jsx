import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../Redux/Actions/actions";

function Pagination() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <div>
      <ul>
        {state.pageNumber > 1 && (
          <li
            onClick={() => {
              dispatch(changePage("prev"));
            }}
          >
            Previous
          </li>
        )}

        <li>{state.pageNumber}</li>
        {state.pageNumber < 4 && (
          <li
            onClick={() => {
              dispatch(changePage("next"));
            }}
          >
            Next
          </li>
        )}
      </ul>
    </div>
  );
}

export default Pagination;

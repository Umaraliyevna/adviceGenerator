import React from "react";

import { FaTimes } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { SavedContainer } from "./savedAdvice.style";
import { useDispatch, useSelector } from "react-redux";
import { removeSavedAdvice } from "../redux/SliceRedux/savedAdvice";

function SavedAdvice({ closeSavedAdviceList }) {
  const saved = useSelector((store) => store.savedAdvice);
  const dispatch = useDispatch();

  const removeAdvice = (advice) => {
    dispatch(removeSavedAdvice(advice));
  };
  return (
    <SavedContainer>
      <button className="closeBtn" onClick={closeSavedAdviceList}>
        <FaTimes />
      </button>
      <h1>Saved Advice</h1>

      {saved.length > 0 ? (
        <ol style={{ padding: 0 }}>
          {saved.map((advice) => (
            <li
              style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{advice}</span>
              <RiDeleteBin5Fill
                onClick={() => removeAdvice(advice)}
                className="deleteBtn"
              />
            </li>
          ))}
        </ol>
      ) : (
        <p>No saved advice yet</p>
      )}
    </SavedContainer>
  );
}

export default SavedAdvice;

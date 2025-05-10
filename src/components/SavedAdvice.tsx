import React from "react";

import { FaTimes } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { SavedContainer } from "./savedAdvice.style";
import { useDispatch, useSelector } from "react-redux";
import { removeSavedAdvice } from "../redux/SliceRedux/savedAdvice";
import { useAppSelector } from "../hooks/reduxHook";

function SavedAdvice({ closeSavedAdviceList }) {
  const saved = useAppSelector((store) => store.advice);
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
        <ul style={{ padding: 0 }}>
          {saved.map((advice) => (
            <li key={advice}>
              <span>{advice}</span>
              <RiDeleteBin5Fill
                onClick={() => removeAdvice(advice)}
                className="deleteBtn"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved advice yet</p>
      )}
    </SavedContainer>
  );
}

export default SavedAdvice;

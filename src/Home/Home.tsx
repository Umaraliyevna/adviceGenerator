import React, { useCallback, useState } from "react";

import useAdvice from "../hooks/useAdvice";
import SavedAdvice from "../components/SavedAdvice";

import { HomeContainer } from "./home.style";
import { useDispatch, useSelector } from "react-redux";
import { addSavedAdvice } from "../redux/SliceRedux/savedAdvice";

function Home() {
  const [isOpenSavedList, setIsOpenSavedList] = useState(false);
  const dispatch = useDispatch();

  const {
    advice,
    isLoader,
    getRandomAdvice,
    showNextAdvice,
    isSaved,
    setIsSaved,
  } = useAdvice();

  const handleSavedAdvice = useCallback((advice) => {
    dispatch(addSavedAdvice(advice));
    setIsSaved(!isSaved);
  }, []);

  const openSavedAdviseList = useCallback(() => {
    setIsOpenSavedList(true);
  }, []);

  const closeSavedAdviceList = useCallback(() => {
    setIsOpenSavedList(false);
  }, []);

  return (
    <HomeContainer>
      <h2>Welcome to our advice website</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const searchValue = (
            e.currentTarget.elements.namedItem("search") as HTMLInputElement
          )?.value;
          getRandomAdvice(searchValue);
        }}
      >
        <input name="search" type="text" placeholder="Write something..." />
        <button onClick={showNextAdvice}>Take advice</button> <br />
      </form>
      <q>{isLoader ? "Yuklanmoqda..." : advice?.advice || ""}</q> <br />
      <div className="btnGroup">
        <button onClick={showNextAdvice} disabled={isLoader}>
          Next
        </button>
        {!isSaved ? (
          <button
            onClick={() => {
              if (advice) {
                handleSavedAdvice(advice.advice);
              }
            }}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            className="viewSavedAdvice"
            onClick={openSavedAdviseList}
          >
            View Saved
          </button>
        )}
        {isOpenSavedList && (
          <SavedAdvice closeSavedAdviceList={closeSavedAdviceList} />
        )}
      </div>
    </HomeContainer>
  );
}

export default Home;

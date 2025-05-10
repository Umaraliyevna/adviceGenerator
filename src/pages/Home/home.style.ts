import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #0f0f0f;
  color: #fff;
  height: 91vh;
  width: 600px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    input {
      padding: 0.7rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 10px;
      background-color: #1f1f1f;
      color: #fff;
      width: 300px;
      outline: none;
    }

    button {
      background-color: #6c63ff;
      color: #fff;
      padding: 0.6rem 1.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: #4e46c7;
      }
    }
  }

  q {
    font-size: 1.2rem;
    margin-top: 1.5rem;
    font-style: italic;
    color: #ddd;
    text-align: center;
  }
  .btnGroup {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    background-color: #6c63ff;
    color: #fff;
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #4e46c7;
    }
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  .viewSavedAdvice {
    background-color: transparent;
    border: 1px solid #6c63ff;

    &:hover {
      background-color: rgba(108, 99, 255, 0.1);
    }
  }
`;

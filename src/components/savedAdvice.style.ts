import styled from "styled-components";

export const SavedContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background-color: #1a1a1a;
  padding: 1.5rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  overflow-y: auto;
  transition: transform 0.3s ease;
  transform: translateX(0);

  .closeBtn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #777;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  h1 {
    color: #fff;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  ul {
    width: 100%;
  }

  ul li {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }

  ul li span {
    width: fit-content;
  }
  .deleteBtn {
    cursor: pointer;
    font-size: 20px;
  }
`;

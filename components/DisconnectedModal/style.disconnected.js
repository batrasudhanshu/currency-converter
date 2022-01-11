import styled from "styled-components";
export default styled.div`
  border: none;
  .disconnected {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
    h2 {
      margin: 0;
    }
    div {
      width: 90%;
      display: flex;
      justify-content: center;
      gap: 10px;

      button {
        width: 100%;
        height: 35px;
        color: black;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e9967a;
      }
      button:hover {
        background-color: #841b2d;
        color: white;
      }
    }
  }
`;

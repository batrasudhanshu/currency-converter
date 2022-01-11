import styled from "styled-components";
export default styled.div`
  .connected {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        margin: 0;
      }
      button {
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      margin: 25px 15px 50px 15px;
      gap: 14px;

      div {
        display: flex;
        justify-content: space-between;
      }
    }
    .button-outer {
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

import styled from "styled-components";
export default styled.div`
  background-color: slategrey;

  .container-outer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    gap: 50px;

    .paper-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 50px 50px 50px;
      flex-direction: column;
      gap: 50px;

      button {
        color: blue;
        font-weight: 700;
        border: none;
      }
    }
  }
`;

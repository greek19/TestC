import styled from "styled-components";

const MainApp = styled.main`
  h2.question-text {
    font-size: clamp(1.2rem, 6vw, 3rem);
  }
  @media screen and (min-width: 980px) {
    place-items: center;
  }
`;

export default MainApp;

import styled from "styled-components";
import { GlobalVariables } from "./GlobalStyles";

export const ServicesStyled = styled.section`
  background: ${GlobalVariables.bcgPrimary3};
  padding-bottom: 2.5rem;
  .service-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    padding: 3rem 0;
    h1 {
      font-size: 2rem;
      width: 75%;
    }
  }
  .service-footer {
    article {
      background: #c5a491;
      margin-bottom: 2rem;
      border-radius: ${GlobalVariables.mainRadius};
      padding: 3rem;
      text-align: center;
      span {
        background: #eaded7;
        padding: 1rem;
        border-radius: 50%;
        width: 75px;
        height: 75px;
        margin: 0 auto;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h3 {
        text-transform: ${GlobalVariables.mainTransform};
        margin: 1rem;
      }
    }
  }
`;

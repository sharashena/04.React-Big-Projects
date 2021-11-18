import styled from "styled-components";
import { GlobalVariables } from "./GlobalStyles";

export const Featured = styled.div`
  background-color: #222222;
  position: relative;
  border-radius: ${GlobalVariables.mainRadius};
  &:hover img {
    opacity: 0.5;
  }
  &:hover .search {
    opacity: 1;
  }
  img {
    transition: ${GlobalVariables.mainTransition};
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    border-radius: ${GlobalVariables.mainRadius};
    box-shadow: ${GlobalVariables.lightShadow};
  }
  .search {
    transition: ${GlobalVariables.mainTransition};
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: ${GlobalVariables.bcgPrimary};
    background: ${GlobalVariables.bcgPrimary5};
    padding: 0.6rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

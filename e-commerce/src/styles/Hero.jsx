import styled from "styled-components";
import { GlobalVariables } from "../styles/GlobalStyles";

export const HeroSection = styled.section`
  .section-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    column-gap: 10rem;
    height: 80vh;
  }
  .hero-content {
    h1 {
      font-size: 3rem;
      line-height: 60px;
    }
    p {
      margin: 1rem 0;
      font-size: 1.5rem;
      line-height: 40px;
    }
    .hero-btn {
      padding: 1rem 1.5rem;
      a {
        text-decoration: none;
        color: ${GlobalVariables.bcgPrimary2};
      }
    }
  }
  .img-content {
    position: relative;
    display: block;
    ::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      left: -8%;
      bottom: 0;
      background-color: #decbc0;
      border-radius: ${GlobalVariables.mainRadius};
    }
    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
      border-radius: ${GlobalVariables.mainRadius};
      position: relative;
      display: block;
    }
    .hero-bcg {
      position: absolute;
      bottom: 0;
      left: -25%;
      width: 250px;
      height: 150px;
      border-radius: ${GlobalVariables.mainRadius};
    }
  }
`;

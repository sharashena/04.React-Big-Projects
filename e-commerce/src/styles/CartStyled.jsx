import styled from "styled-components";
import { GlobalVariables } from "./GlobalStyles";

export const CartStyled = styled.section`
  .cart-center {
    .titles {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      margin-bottom: 2rem;
      h5 {
        text-transform: ${GlobalVariables.mainTransform};
        letter-spacing: ${GlobalVariables.mainSpacing};
        color: ${GlobalVariables.primaryColor2};
        font-size: 1rem;
      }
    }
  }
  .cart-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    gap: 3rem 1rem;
    place-items: center;
    margin: 2rem 0 3rem;
    .img {
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      column-gap: 1rem;
      h4 {
        text-transform: ${GlobalVariables.mainTransform};
        letter-spacing: ${GlobalVariables.mainSpacing};
        font-size: 0.9rem;
      }
      .color {
        color: ${GlobalVariables.primaryColor2};
      }
      .small-price {
        display: none;
        color: ${GlobalVariables.bcgPrimary5};
      }
    }

    .price {
      letter-spacing: ${GlobalVariables.mainSpacing};
      color: ${GlobalVariables.bcgPrimary5};
    }
    h5 {
      font-size: 1rem;
    }
    img {
      width: 100px;
      height: 80px;
      object-fit: cover;
      border-radius: ${GlobalVariables.mainRadius};
      display: block;
    }
    .remove-btn {
      background-color: #bb2525;
      color: ${GlobalVariables.bcgPrimary2};
      border-radius: ${GlobalVariables.mainRadius};
      cursor: pointer;
      border: 0;
      outline: 0;
      padding: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .cart-btns {
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0 0;
    .continue {
      text-transform: ${GlobalVariables.mainTransform} !important;
      font-size: 1rem !important;
      padding: 0.5rem 0.5rem;
      a {
        color: ${GlobalVariables.bcgPrimary2} !important;
        text-decoration: none;
      }
    }
    .clear-btn {
      padding: 0.5rem 0.5rem;

      background-color: ${GlobalVariables.bcgPrimary4} !important;
      font-size: 1rem !important;

      text-transform: ${GlobalVariables.mainTransform};
    }
  }
  .subtotal {
    letter-spacing: 2px;
    color: ${GlobalVariables.primaryColor2};
  }
`;

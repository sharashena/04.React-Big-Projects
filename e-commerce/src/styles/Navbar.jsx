import styled from "styled-components";
import { GlobalVariables } from "./GlobalStyles";

export const Navbar = styled.nav`
  .section-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    max-width: ${GlobalVariables.maxWidth};
    margin: 0 auto;
    /* nav header */
    .navbar-header {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 150px;
      }
      .icon {
        cursor: pointer;
      }
    }
    .bars {
      display: none;
      cursor: pointer;
    }

    /* nav header end */

    /* nav links */
    .nav-links {
      display: flex;
      padding: 0 2rem;
      li {
        list-style: none;
        a {
          text-decoration: none;
          text-transform: ${GlobalVariables.mainTransform};
          color: ${GlobalVariables.primaryColor};
          padding: 0 1rem;
          letter-spacing: ${GlobalVariables.mainSpacing};
          padding-bottom: 0.5rem;
          border: 2px solid transparent;
          transition: ${GlobalVariables.mainTransition};
          &:hover {
            border-bottom: 2px solid ${GlobalVariables.bcgPrimary5};
          }
        }
      }
    }
    /* nav links end */

    /* nav icons */
    .nav-icons,
    .icon {
      display: flex;
      align-items: center;
      text-transform: ${GlobalVariables.mainTransform};
      margin-left: 1.5rem;
      position: relative;
      a {
        text-decoration: none;
        color: ${GlobalVariables.primaryColor};
      }
      p {
        margin-right: 0.5rem;
      }
      .count-cart {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        background-color: ${GlobalVariables.bcgPrimary5};
        width: 16px;
        height: 16px;
        padding: 12px;
        border-radius: 50%;
        color: ${GlobalVariables.bcgPrimary};
        position: absolute;
        top: -5px;
        right: -10px;
      }
    }
    /* nav icons end */
  }
`;

import styled from "styled-components";
import { GlobalVariables } from "./GlobalStyles";

export const SideNav = styled.article`
  /* side nav */
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: ${GlobalVariables.bcgPrimary};
  transform: translateX(-100%);
  transition: ${GlobalVariables.mainTransition};
  opacity: 0;

  /* navbar-header */
  .navbar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    img {
      width: 150px;
    }
    .icon {
      cursor: pointer;
      color: #bb2525;
      transition: ${GlobalVariables.mainTransition};
      &:hover {
        color: #e66b6b;
      }
    }
  }
  /* navbar-header end */

  /* nav links */
  .navbar-container {
    height: 0;
    overflow: hidden;
    li {
      list-style: none;
      a {
        text-decoration: none;
        text-transform: ${GlobalVariables.mainTransform};
        letter-spacing: ${GlobalVariables.mainSpacing};
        color: ${GlobalVariables.primaryColor};
        display: block;
        padding: 1rem 2rem;
        transition: ${GlobalVariables.mainTransition};
        &:hover {
          background-color: #f1f5f8;
          padding: 1rem 3rem;
        }
      }
    }
  }

  /* nav links end */

  /* nav icons */
  .navbar-icons {
    display: flex;
    justify-content: center;
    text-transform: ${GlobalVariables.mainTransform};
    margin-top: 2rem;
    .icon {
      display: flex;
      align-items: center;
      margin-left: 2rem;
      position: relative;
      text-decoration: none;
      color: ${GlobalVariables.primaryColor};
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
      p {
        margin-right: 1rem;
      }
    }
  }
  /* nav icons end */

  /* side nav end */
`;

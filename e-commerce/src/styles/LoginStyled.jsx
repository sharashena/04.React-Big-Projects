import styled from "styled-components";
import { GlobalVariables } from "./GlobalStyles";

export const LoginStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  width: 400px;
  margin: 0 auto;
  .form-group {
    margin: 1rem 0;
    position: relative;
    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid silver;
      &::placeholder {
        text-transform: ${GlobalVariables.mainTransform};
        letter-spacing: ${GlobalVariables.mainSpacing};
      }
    }
  }
  p {
    text-transform: ${GlobalVariables.mainTransform};
    letter-spacing: ${GlobalVariables.mainSpacing};
  }
  .empty {
    text-align: center;
    margin-bottom: 1rem;
    color: tomato;
  }

  .login-btn {
    width: 100%;
    margin-bottom: 1rem;
  }

  .form-footer {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    p {
      font-size: 0.9rem;
    }
    .member-btn {
      background: transparent;
      border: 0;
      color: ${GlobalVariables.bcgPrimary5};
      text-transform: ${GlobalVariables.mainTransform};
    }
  }
`;

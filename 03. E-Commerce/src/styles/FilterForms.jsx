import styled from "styled-components";

export const FilterStyled = styled.form`
  position: sticky;
  top: 0;
  left: 0;
  padding: 1rem 0;
  .form-group {
    margin: 0 0 1rem;
    .all-btn {
      background-color: transparent;
      border: 0;
      outline: 0;
      margin: 0.5rem 0;
      text-transform: capitalize;
      letter-spacing: 2px;
      color: rgb(128, 119, 119);
      cursor: pointer;
    }
    .search {
      background-color: #f1f5f8;
      border: 0;
      outline: 0;
      padding: 0.5rem;
      border-radius: 0.25rem;
      &::placeholder {
        text-transform: capitalize;
        letter-spacing: 2px;
      }
    }
    .form-title {
      margin: 0.5rem 0;
      letter-spacing: 2px;
      text-transform: capitalize;
    }
    .active-btn {
      border-bottom: 1px solid silver !important;
    }
    .category-btn {
      display: block;
      background-color: transparent;
      border: 0;
      outline: 0;
      margin: 0.7rem 0;
      text-transform: capitalize;
      letter-spacing: 2px;
      color: rgb(128, 119, 119);
      cursor: pointer;
      padding-bottom: 0.3rem;
    }
    .company {
      text-transform: capitalize;
      letter-spacing: 2px;
      border-radius: 0.25rem;
      background-color: #f1f5f8;
      border: 0;
      outline: 0;
      padding: 0.3rem;
    }

    p {
      margin-bottom: 0.5rem;
    }
    label {
      text-transform: capitalize;
      margin-right: 0.5rem;
    }
  }
  .clear-filters {
    cursor: pointer;
    background-color: #bb2525;
    border: 0;
    outline: 0;
    border-radius: 0.25rem;
    padding: 0.4rem 0.7rem;
    color: #f1f5f8;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
`;

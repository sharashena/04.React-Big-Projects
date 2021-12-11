import React from "react";
import useUserForm from "./useUserForm";
import validateInfo from "./validateInfo";
const FormInputs = () => {
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    toCapitalCase,
    capitalize,
    setCapitalize,
  } = useUserForm(validateInfo);

  return (
    <div className="form-container">
      <article className="form-group">
        {/* First Name */}
        <aside className="form-control">
          <label htmlFor="firstName">
            first name <span className="error_message">*</span>{" "}
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            minLength="1"
            maxLength="10"
            required
            value={values.firstName}
            onChange={handleChange}
            onBlur={toCapitalCase}
          />
          {errors.firstName && (
            <div className="error_container">
              <span className="error_message">{errors.firstName}</span>
            </div>
          )}
        </aside>
        {/* Age */}
        <aside className="form-control">
          <label htmlFor="age">
            age<span className="error_message">*</span>{" "}
          </label>
          <input
            type="number"
            name="age"
            id="age"
            min="12"
            max="65"
            required
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && (
            <div className="error_container">
              <span className="error_message">{errors.age}</span>
            </div>
          )}
        </aside>
        {/* Email */}
        <aside className="form-control">
          <label htmlFor="email">
            email <span className="error_message">*</span>{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="error_container">
              <span className="error_message">{errors.email}</span>
            </div>
          )}
        </aside>
        {/* favourite color */}
        <aside className="form-control">
          <p htmlFor="color">what is your favourite color? (optional) </p>
          <select
            name="color"
            id="color"
            required
            value={values.color}
            onChange={handleChange}
          >
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
          </select>
        </aside>

        <button type="submit" onClick={handleSubmit}>
          submit form
        </button>
      </article>
    </div>
  );
};

export default FormInputs;

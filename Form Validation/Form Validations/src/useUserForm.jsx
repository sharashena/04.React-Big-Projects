import { useState } from "react";
import { URL } from "./URL";

const useUserForm = validate => {
  // states

  const [capitalize, setCapitalize] = useState("");
  const [values, setValues] = useState({
    firstName: capitalize,
    age: "",
    email: "",
    color: "white",
  });
  const [errors, setErrors] = useState({});

  // Capitalize letter when clicking outside of input

  const toCapitalCase = () => {
    if (capitalize) {
      setCapitalize(oldVal => {
        return oldVal
          .split(" ")
          .map(s => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" ");
      });
    }
  };

  // handle Change

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // handle Submit

  const handleSubmit = e => {
    e.preventDefault();
    if (values.firstName && values.age && values.email) {
      setValues({
        firstName: "",
        age: "",
        email: "",
        color: "white",
      });
      setErrors({});
    }
    setErrors(validate(values));

    // fetch data

    (async () => {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FirstName: values.firstName,
            Age: values.age,
            Email: values.email,
            Color: values.color,
          }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    toCapitalCase,
    capitalize,
    setCapitalize,
  };
};

export default useUserForm;

const validateInfo = values => {
  let errors = {};

  // firstName
  if (!values.firstName.trim()) {
    errors.firstName = "first name is required";
  } else if (values.firstName.length <= 3) {
    errors.firstName = "too few symbols";
  }
  // age
  if (!values.age) {
    errors.age = "age is required";
  } else if (values.age < 18) {
    errors.age = "too young";
  } else if (values.age > 50) {
    errors.age = "you exceeded age, please enter correct age";
  } else if (values.age < 12) {
    errors.age = "age is under 12";
  }
  // email
  if (!values.email) {
    errors.email = "email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "incorrect format";
  }
  return errors;
};

export default validateInfo;

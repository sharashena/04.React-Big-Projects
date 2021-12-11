export const fromValidation = [
  {
    inputName: "firstName",
    rules: [
      { type: "required", message: "the field is required" },
      { type: "minLength", value: 3, message: "to few symbols" },
    ],
    validateOn: "submit",
  },
  {
    inputName: "email",
    rules: [
      { type: "email", message: "incorrect format" },
      { type: "required", message: "required" },
    ],
    validateOn: "submit",
  },
  {
    inputName: "age",
    rules: [{ type: "min", value: 18, message: "to young" }],
    validateOn: "blur",
  },
];

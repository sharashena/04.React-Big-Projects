import React from "react";
import PropTypes from "prop-types";

// material

import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  inputs: {
    ...theme.typography.globalText,
    margin: "1rem 0 !important",
  },
}));

const ModalForm = ({ toggleModal, onChange, handleSubmit, users, isEdit }) => {
  const classes = useStyles();

  const options = [
    { name: "White" },
    { name: "Black" },
    { name: "Blue" },
    { name: "Red" },
    { name: "Orange" },
    { name: "Green" },
  ];

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="on"
    >
      {/* inputs */}

      <TextField
        id="name"
        name="name"
        label="name"
        variant="standard"
        fullWidth
        value={users.name}
        onChange={onChange}
        className={classes.inputs}
      />
      <TextField
        id="age"
        name="age"
        label="age"
        variant="standard"
        type="number"
        fullWidth
        value={users.age}
        onChange={onChange}
        className={classes.inputs}
      />

      {/* select */}

      <FormControl
        variant="standard"
        sx={{ m: 1 }}
        fullWidth
        className={classes.inputs}
      >
        <InputLabel id="color">color</InputLabel>
        <Select
          labelId="color"
          id="color"
          name="color"
          value={users.color}
          onChange={onChange}
          label="color"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem value={option.name} key={index}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          toggleModal();
          handleSubmit();
        }}
      >
        {isEdit ? "edit" : "submit"}
      </Button>
    </Box>
  );
};

ModalForm.propTypes = {
  users: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ModalForm;

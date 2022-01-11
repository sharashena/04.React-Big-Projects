import React from "react";
import PropTypes from "prop-types";

// material

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles(() => ({
  disabledButton: {
    "&:hover": {
      cursor: "pointer !important",
    },
  },
}));

const TreeGridForm = ({ name, list, toggleModal, handleSubmit, onChange }) => {
  const classes = useStyles();
  return (
    <Box sx={style}>
      <FormControl fullWidth>
        <InputLabel id="users">Users</InputLabel>
        <Select
          labelId="users"
          id="users"
          name="users"
          value={name}
          label="users"
          onChange={onChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {list.map((list, index) => {
            return (
              <MenuItem value={list.id} key={index}>
                {list.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        fullWidth
        style={{ marginTop: "1rem" }}
        onClick={() => {
          toggleModal();
          handleSubmit();
        }}
        disabled={!name}
        className={`${!name ? classes.disabledButton : null}`}
      >
        submit
      </Button>
    </Box>
  );
};

TreeGridForm.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TreeGridForm;

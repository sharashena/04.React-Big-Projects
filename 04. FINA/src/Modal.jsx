import React from "react";
// import material UI
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { FormControl } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import useStyles from "./styles";
// context
import { useGlobalContext } from "./context";

const Modal = () => {
  const classes = useStyles();
  const {
    isModalOpen,
    setIsModalOpen,
    handleSubmit,
    handleChange,
    users,
    isEdit,
  } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal modal-open" : "modal"}>
      <div className="closeModal">
        <span onClick={() => setIsModalOpen(false)}>&times;</span>
      </div>
      <div className="modal-overlay">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
          className="form-group"
        >
          {/* form control */}
          <article>
            <TextField
              className={classes.formControl}
              name="name"
              value={users.name}
              onChange={handleChange}
              label="Enter name"
              variant="standard"
            />
          </article>
          {/* form control */}
          <article>
            <TextField
              className={classes.formControl}
              name="age"
              value={users.age}
              onChange={handleChange}
              label="Enter Age"
              type="number"
              variant="standard"
            />
          </article>
          {/* form control */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Color</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="color"
                value={users.color}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="white">White</MenuItem>
                <MenuItem value="black">Black</MenuItem>
                <MenuItem value="blue">Blue</MenuItem>
                <MenuItem value="yellow">Yellow</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* submit btn */}
          <Button
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            className={isEdit ? "submit-btn edit" : "submit-btn"}
          >
            {isEdit ? "edit" : "submit"}
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Modal;

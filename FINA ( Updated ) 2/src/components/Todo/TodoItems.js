import React from "react";
import PropTypes from "prop-types";

// material

import { TableRow, TableCell, IconButton, Checkbox } from "@mui/material";
import TrashIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  tableBody: {
    ...theme.typography.globalText,
  },
  editIcon: {
    color: `${theme.palette.success.main} !important`,
    "&:hover": {
      background: "transparent",
    },
  },
  deleteIcon: {
    color: `${theme.palette.error.main} !important`,
    "&:hover": {
      background: "transparent",
    },
  },
}));

const TodoItems = ({
  id,
  name,
  age,
  color,
  editList,
  deleteList,
  handleChange2,
  checked,
}) => {
  const classes = useStyles();

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        <Checkbox disableRipple onChange={handleChange2} checked={checked[0]} />
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableBody}>
        {id}
      </TableCell>
      <TableCell className={classes.tableBody}>{name}</TableCell>
      <TableCell className={classes.tableBody}>{age}</TableCell>
      <TableCell className={classes.tableBody}>{color}</TableCell>
      <TableCell align="center">
        <IconButton className={classes.editIcon} onClick={() => editList(id)}>
          <EditIcon />
        </IconButton>
        <IconButton
          className={classes.deleteIcon}
          onClick={() => deleteList(id)}
        >
          <TrashIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

TodoItems.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  editList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
};

export default TodoItems;

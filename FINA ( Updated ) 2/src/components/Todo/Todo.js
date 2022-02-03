import React, { useState } from "react";
import TodoItems from "./TodoItems";
import PropTypes from "prop-types";

// redux

import { connect, useDispatch } from "react-redux";

// actions

import {
  delList,
  editItem,
  clear,
  handleChange,
} from "../../store/actions/handleTodoList";
import { deleteList } from "../../store/actions/handleTreeGrid";

// material

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  tableContainer: {
    display: "flex !important",
    justifyContent: "space-between",

    maxWidth: "1124px",
    margin: "3rem auto",
  },
  titles: {
    ...theme.typography.globalTitles,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem !important",
    },
    borderRight: "1px solid silver",
    "&:last-child": {
      borderRight: "none",
    },
  },
  clearList: {
    display: "block",
    margin: "0 auto !important",
    color: `${theme.palette.error.main} !important`,
    ...theme.typography.globalText,
    textTransform: "uppercase",
    "&:hover": {
      background: "transparent",
    },
  },
  flex: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "space-between !important",
  },
  headerBtn: {
    "&:hover": {
      background: "none !important",
    },
  },
}));

const cells = [
  { title: "ID" },
  { title: "name" },
  { title: "age" },
  { title: "color" },
];

const options = [
  { text: "Unsort" },
  { text: "Sort By ASC" },
  { text: "Sort By DESC" },
  { text: "Filter" },
  { text: "Hide" },
  { text: "Show Columns" },
];

function Todo({ list, editList }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [checked, setChecked] = useState([true, false]);
  const open = Boolean(anchorEl);

  const handleChange1 = e => {
    setChecked([e.target.checked, e.target.checked]);
  };

  const handleChange2 = e => {
    if (checked[1]) {
      setChecked([e.target.checked, checked[0]]);
    } else {
      setChecked([checked[0], e.target.checked]);
    }
  };

  const handleSelectIndex = (e, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteListItem = id => {
    const deleteTodoItem = list.filter(list => list.id !== id);
    dispatch(delList(deleteTodoItem));
    dispatch(deleteList(deleteTodoItem));
  };

  const clearList = () => {
    dispatch(clear());
  };

  // sort

  const sortByAsc = () => {
    const sortArr = list.sort((a, b) => a.id - b.id);
    return sortArr;
  };
  const sortByDesc = () => {
    const sortArr = list.sort((a, b) => b.id - a.id);
    return sortArr;
  };

  const unsort = () => {
    const unsortArr = list.sort((a, b) => a.id - b.id);
    return unsortArr;
  };

  // sort end

  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  disableRipple
                  onChange={handleChange1}
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                />
              </TableCell>
              {cells.map((item, index) => (
                <TableCell classes={{ root: classes.titles }} key={index}>
                  <Box className={classes.flex}>
                    {item.title}
                    <Button
                      disableRipple
                      onClick={handleClick}
                      className={classes.headerBtn}
                    >
                      <MoreVertRounded />
                    </Button>
                    <Menu
                      style={{ cursor: "pointer" }}
                      id="menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      elevation={1}
                      MenuListProps={{
                        "aria-labelledby": "lock-button",
                      }}
                    >
                      {options.map((item, index) => {
                        return (
                          <MenuItem
                            key={index}
                            disabled={index === selectedIndex}
                            onClick={e => {
                              handleClose();
                              index === 0 && unsort();
                              index === 1 && sortByAsc();
                              index === 2 && sortByDesc();
                              handleSelectIndex(e, index);
                            }}
                          >
                            {item.text}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </Box>
                </TableCell>
              ))}
              <TableCell align="center" className={classes.titles} />
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(list => {
              return (
                <TodoItems
                  {...list}
                  key={list.id}
                  deleteList={deleteListItem}
                  editList={editList}
                  handleChange2={handleChange2}
                  checked={checked}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          maxWidth: "1124px",
          margin: "0 auto",
          padding: "0 .5rem 3rem",
        }}
      >
        {list.length > 0 && (
          <Button
            disableRipple
            className={classes.clearList}
            onClick={clearList}
          >
            clear list
          </Button>
        )}
      </Box>
    </>
  );
}

Todo.propTypes = {
  list: PropTypes.array.isRequired,
  editList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ todoState: { list } }) => {
  return { list };
};

export default connect(mapStateToProps)(Todo);

import React from "react";
import TodoItems from "./TodoItems";
import PropTypes from "prop-types";

// redux

import { connect, useDispatch } from "react-redux";

// actions

import { delList, editItem, clear } from "../../store/actions/handleTodoList";
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
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  tableContainer: {
    maxWidth: "1124px",
    margin: "3rem auto",
  },
  titles: {
    ...theme.typography.globalTitles,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem !important",
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
}));

function Todo({ list, editList }) {
  const dispatch = useDispatch();

  const cells = [
    { title: "No." },
    { title: "name", center: "center" },
    { title: "age", center: "center" },
    { title: "color", center: "center" },
  ];

  const deleteListItem = id => {
    const deleteTodoItem = list.filter(list => list.id !== id);
    dispatch(delList(deleteTodoItem));
    dispatch(deleteList(deleteTodoItem));
  };

  const clearList = () => {
    dispatch(clear());
  };

  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {cells.map((item, index) => (
                <TableCell
                  align={item.center}
                  classes={{ root: classes.titles }}
                  key={index}
                >
                  {item.title}
                </TableCell>
              ))}
              <TableCell align="center" className={classes.titles}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((list, index) => {
              return (
                <TodoItems
                  {...list}
                  key={list.id}
                  index={index}
                  deleteList={deleteListItem}
                  editList={editList}
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
};

const mapStateToProps = ({ todoState: { list } }) => {
  return { list };
};

export default connect(mapStateToProps)(Todo);

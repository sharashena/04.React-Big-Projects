import React from "react";
// import material ui
import { Typography } from "@material-ui/core";
import EditItem from "@material-ui/icons/Edit";
import DeleteItem from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const TodoItems = ({ id, name, age, color, deleteItem, editItem, index }) => {
  return (
    <>
      <div className="todo-items" key={id}>
        <Typography variant="h6">{index + 1}</Typography>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h6">{age}</Typography>
        <Typography variant="h6">{color}</Typography>

        <div className="icons">
          <IconButton size="small" onClick={() => editItem(id)}>
            <EditItem fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => deleteItem(id)}>
            <DeleteItem fontSize="small" color="secondary" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default TodoItems;

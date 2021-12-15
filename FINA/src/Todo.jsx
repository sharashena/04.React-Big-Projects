import React from "react";
// material ui
import { Button, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

// todo items
import TodoItems from "./TodoItems";

// context
import { useGlobalContext } from "./context";

// alert
import Alert from "./Alert";

const Todo = () => {
  const classes = useStyles();
  const {
    setIsModalOpen,
    isModalOpen,
    list,
    deleteItem,
    editItem,
    clearList,
    alert,
  } = useGlobalContext();
  return (
    <>
      {/* add user */}
      <Container maxWidth="md">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          add user
        </Button>
      </Container>

      {/* todo  */}
      <article className="todo">
        <Container maxWidth="lg">
          {/* alert */}
          {alert.show && <Alert />}
          {/* todo titles */}
          <div className="todo-titles">
            <Container className="content">
              <Typography variant="h5">id</Typography>
              <Typography variant="h5">name</Typography>
              <Typography variant="h5">age</Typography>
              <Typography variant="h5">color</Typography>
              <span></span>
            </Container>
          </div>
          {/* todo input */}
          <Container className={list.length > 4 ? classes.todoContent : null}>
            {list.map((item, index) => {
              return (
                <TodoItems
                  key={item.id}
                  {...item}
                  deleteItem={deleteItem}
                  editItem={editItem}
                  index={index}
                />
              );
            })}
          </Container>
          {list.length === 0 ? null : (
            <Button
              variant="text"
              color="secondary"
              className={classes.clearBtn}
              onClick={clearList}
            >
              clear list
            </Button>
          )}
        </Container>
      </article>
    </>
  );
};

export default Todo;

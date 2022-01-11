import React from "react";
import PropTypes from "prop-types";

// material

import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { IconButton, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
// icons
import { Delete, ExpandMore, ChevronRight } from "@mui/icons-material";

const useStyles = makeStyles(theme => ({
  deleteIcon: {
    color: `${theme.palette.error.main} !important`,
    "&:hover": {
      background: "transparent",
    },
  },
}));

const TreeGridItems = ({ treeGridList, handleDelete }) => {
  const classes = useStyles();
  return (
    <TreeView
      aria-label="disabled items"
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
      disabledItemsFocusable={false}
      multiSelect
    >
      <TreeItem nodeId="1" label="Users">
        {treeGridList.map((list, index) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={index}
            >
              <TreeItem
                nodeId={(index + 2).toString()}
                label={list.name}
                sx={{
                  width: "100%",
                  marginRight: "1rem",
                }}
              />
              <IconButton
                className={classes.deleteIcon}
                onClick={() => handleDelete(list.id)}
              >
                <Delete />
              </IconButton>
            </Box>
          );
        })}
      </TreeItem>
    </TreeView>
  );
};

TreeGridItems.propTypes = {
  treeGridList: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TreeGridItems;

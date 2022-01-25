import React from "react";
import PropTypes from "prop-types";
// material

import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { Box } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
// icons
import { Delete, ExpandMore, ChevronRight } from "@mui/icons-material";

const useStyles = makeStyles(theme => ({
  deleteIcon: {
    marginLeft: "1rem !important",
    color: `${theme.palette.error.main} !important`,
    "&:hover": {
      background: "transparent",
    },
  },
  trashIcon: {
    position: "absolute",
    right: 0,
    zIndex: 1,
    color: theme.palette.error.main,
    fontSize: "1.2rem !important",
  },
  editIcon: {
    fontSize: "1.2rem !important",
    color: theme.palette.success.main,
  },
}));

const TreeGridItems = ({
  treeGridList,
  handleDelete,
  handleSelectId,
  handleEdit,
  selectedId,
  defaultSelectedId,
}) => {
  const classes = useStyles();

  const renderTree = (list, id = null) => {
    return list
      .filter(item => item.parentId === id)
      .map(item => {
        return (
          <div key={item.id}>
            <TreeItem
              nodeId={item.id.toString()}
              icon={
                item.id === selectedId ? (
                  <>
                    <Delete
                      classes={{ root: classes.trashIcon }}
                      onClick={() => handleDelete(item.id)}
                    />
                    <Edit
                      classes={{ root: classes.editIcon }}
                      onClick={() => handleEdit(item.id)}
                    />
                  </>
                ) : null
              }
              label={item.name}
              sx={{
                width: "100%",
                my: ".5rem",
                position: "relative",
              }}
              onClick={() => handleSelectId(item.id)}
            >
              {item.type === "folder" && renderTree(list, item.id)}
            </TreeItem>
          </div>
        );
      });
  };

  return (
    <TreeView
      aria-label="tree-items"
      defaultCollapseIcon={<ExpandMore />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRight />}
      disabledItemsFocusable={false}
    >
      <TreeItem nodeId="1" label="Users" onClick={defaultSelectedId}>
        <Box>{renderTree(treeGridList)}</Box>
      </TreeItem>
    </TreeView>
  );
};

TreeGridItems.propTypes = {
  treeGridList: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default TreeGridItems;

import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const HeaderMenu = ({ setOpenDrawer }) => {
  const [open, setOpen] = useState(null);

  const handleopen = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <MoreVert onClick={handleopen} />

      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContextAnchorEl={null}
        anchorOrigin={{
          vertical: "button",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          //calling two function in
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;

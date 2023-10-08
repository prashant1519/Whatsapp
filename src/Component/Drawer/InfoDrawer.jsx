import { Box, Drawer, Typography, styled } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profile from "./Profile";

const Header = styled(Box)`
  background-color: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;

  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 700;
  }
`;

const Component = styled(Box)`
  background-color: #ededed;
  height: 85%;
`;

const drawerstyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const InfoDrawer = ({ openDrawer, setOpenDrawer }) => {
  const handleclose = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <Drawer
        // anchor={anchor}
        open={openDrawer}
        onClose={handleclose}
        PaperProps={{ sx: drawerstyle }}
        style={{ zIndex: 1500 }}
      >
        <Header>
          <ArrowBackIcon onClick={() => setOpenDrawer(false)} />
          <Typography>Profile</Typography>
        </Header>

        <Component>
          <Profile />
        </Component>
      </Drawer>
    </>
  );
};

export default InfoDrawer;

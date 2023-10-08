import React, { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Login from "./Account/Login";
import { AccountContext } from "./Context/AccountPrvider";
import ChatDialog from "./Chat/ChatDialog";

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <Login />
        </>
      )}
    </component>
  );
};

export default Messenger;

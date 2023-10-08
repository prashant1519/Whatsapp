import { Dialog, styled, Box } from "@mui/material";
import React, { useContext } from "react";
import EmptyChat from "./EmptyChat";
import Menu from "../Menu/Menu";
import ChatBox from "./ChatBox";
import { AccountContext } from "../Context/AccountPrvider";

const dialogstyle = {
  height: "95%",
  width: "100%",
  maxWidth: "100%",
  margin: "20px",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: 0,
  // overflo
};

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  width: 450px;
  /* height: 20%; */
`;

const RightComponent = styled(Box)`
  width: 73%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = () => {
  const { person } = useContext(AccountContext);
  // console.log(person);
  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} maxWidth={"md"}>
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>

        <RightComponent>
          {/* <EmptyChat /> */}
          {/* <ChatBox /> */}
          {Object?.keys(person)?.length ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;

import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../Service/Api";
import { Box, styled, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../Context/AccountPrvider";
import { Socket } from "socket.io-client";

const Component = styled("Box")`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  // console.log(account);
  useEffect(() => {
    const fetchedData = async () => {
      let response = await getUser();
      console.log(response);
      const filtered = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filtered);
    };
    fetchedData();
  }, [text]);

  useEffect(() => {
    console.log(account);
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);
  console.log(users);
  console.log(account);
  // console.log(account.sub);
  // console.log(users[1].sub);
  return (
    <Component>
      {users?.map((user) => {
        return (
          user.sub !== account.sub && (
            <>
              <Conversation user={user} />;
              <StyledDivider />
            </>
          )
        );
      })}
    </Component>
  );
};

export default Conversations;

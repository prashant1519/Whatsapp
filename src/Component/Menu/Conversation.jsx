import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { getUser, setCoversation } from "../Service/Api";
import { AccountContext } from "../Context/AccountPrvider";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 17px 0;
  cursor: pointer;
`;
const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
  // objectFit: cover,
});

const Conversation = ({ user }) => {
  const { setPerson, account } = useContext(AccountContext);
  // console.log(user);
  // console.log(account);

  const getUser = async () => {
    setPerson(user);
    await setCoversation({
      senderId: account.sub,
      receiverId: user.sub,
    });
  };
  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={user?.picture} alt="dp" />
      </Box>
      <Box>
        <Box>
          <Typography>{user?.name}</Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;

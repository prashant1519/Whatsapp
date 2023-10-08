import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../Context/AccountPrvider";
import { getConversation } from "../Service/Api.js";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      // console.log(data);
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);
  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
};

export default ChatBox;
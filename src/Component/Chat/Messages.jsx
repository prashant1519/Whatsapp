import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { AccountContext } from "../Context/AccountPrvider";
import { getMessages, newMessage } from "../Service/Api";
import SingleMessage from "./SingleMessage";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  const { account } = useContext(AccountContext);
  const [textmessage, setTextMeaasage] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [newMessageTag, setNewMessageTag] = useState(false);
  const [image, setimage] = useState("");
  // console.log(conversation);

  const scrollref = useRef();
  // console.log(messages);
  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation?._id);
      setMessages(data);
      // console.log(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation?._id, newMessageTag]);

  useEffect(() => {
    scrollref.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    // console.log(e);
    // console.log(code);

    if (code == 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiver: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: textmessage,
        };
      } else {
        message = {
          senderId: account.sub,
          receiver: person.sub,
          conversationId: conversation._id,
          type: "image",
          text: image,
        };
      }

      // console.log(message);

      await newMessage(message);
      setTextMeaasage("");
      setFile("");
      setimage("");
      setNewMessageTag((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((mssg) => {
            return (
              <Container ref={scrollref}>
                <SingleMessage mssg={mssg} />;
              </Container>
            );
          })}
      </Component>
      <Footer
        sendText={sendText}
        setTextMeaasage={setTextMeaasage}
        textmessage={textmessage}
        file={file}
        setFile={setFile}
        setimage={setimage}
      />
    </Wrapper>
  );
};

export default Messages;

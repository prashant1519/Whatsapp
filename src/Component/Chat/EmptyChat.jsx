import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";

const Component = styled(Box)`
  background-color: #f8f9f8;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;

const Conatiner = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
  margin: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #41525d;
  font-weight: 400;
  font-family: inherit;
`;

const styledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`;

const EmptyChat = () => {
  return (
    <>
      <Component>
        <Conatiner>
          <Image src="https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg" />
          <Title>whatsApp Web</Title>
          <SubTitle>
            Now send and recieve message without keeping your phone online.
          </SubTitle>
          <SubTitle>
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </SubTitle>
          <styledDivider />
        </Conatiner>
      </Component>
      ;
    </>
  );
};

export default EmptyChat;

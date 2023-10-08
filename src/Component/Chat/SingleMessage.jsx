import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import FormatDate, { downlodedMedia } from "../Utils/Common_Utils";
import { AccountContext } from "../Context/AccountPrvider";
import { iconPDF } from "../../contant/data";
import GetAppIcon from "@mui/icons-material/GetApp";

const Send = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Receive = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;
const SingleMessage = ({ mssg }) => {
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === mssg.senderId ? (
        <Send>
          {mssg.type === "image" ? (
            <ImageMessage mssg={mssg} />
          ) : (
            <TextMessage mssg={mssg} />
          )}
        </Send>
      ) : (
        <Receive>
          {mssg.type === "image" ? (
            <ImageMessage mssg={mssg} />
          ) : (
            <TextMessage mssg={mssg} />
          )}
        </Receive>
      )}
    </>
  );
};

const ImageMessage = ({ mssg }) => {
  return (
    <Box style={{ position: "relative", display: "flex" }}>
      {mssg?.text?.includes(".pdf") ? (
        <Box>
          <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
          <Typography style={{ fontSize: 14 }}>
            {mssg.text.split("/").pop()}
          </Typography>
        </Box>
      ) : (
        <img
          style={{ width: 300, height: "100%", objectFit: "cover" }}
          src={mssg.text}
          alt="message.text"
        />
      )}
      <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
        <GetAppIcon
          onClick={(e) => downlodedMedia(e, mssg.text)}
          style={{
            marginRight: 10,
            border: "1px solid grey",
            borderRadius: "50%",
          }}
          fontSize="small"
        />
        {FormatDate(mssg.createdAt)}
      </Time>
    </Box>
  );
};

const TextMessage = ({ mssg }) => {
  return (
    <>
      <Text>{mssg.text}</Text>
      <Time>{FormatDate(mssg.createdAt)}</Time>
    </>
  );
};
export default SingleMessage;

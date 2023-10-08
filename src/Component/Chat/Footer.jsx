import styled from "@emotion/styled";
import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { uploadFile } from "../Service/Api";

const Conatiner = styled(Box)`
  height: 50px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 10px;
  width: calc(94%-100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
`;
const Footer = ({
  sendText,
  setTextMeaasage,
  textmessage,
  file,
  setFile,
  setimage,
}) => {
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setTextMeaasage(e.target.files[0].name);
  };

  useEffect(() => {
    const setImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let res = await uploadFile(data);
        console.log(res);
        setimage(res);
      }
    };
    setImage();
  }, [file]);
  return (
    <Conatiner>
      <EmojiEmotionsOutlined />

      <label htmlFor="fileInput">
        <ClipIcon />
      </label>

      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField
          placeholder="type a message"
          onChange={(e) => setTextMeaasage(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={textmessage}
        />
      </Search>
      <Mic />
    </Conatiner>
  );
};

export default Footer;

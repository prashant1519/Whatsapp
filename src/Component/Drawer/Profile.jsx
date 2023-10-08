import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../Context/AccountPrvider";
import styled from "@emotion/styled";
import { Padding } from "@mui/icons-material";

const ImageConatiner = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  Padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background-color: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0.08);
  & :first-child {
    font-size: 13px;
    color: #009608;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;

const DescriptionConatiner = styled(Box)`
  padding: 15px 20px 20px 20px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;
const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <ImageConatiner>
        <Image src={account.picture} />
      </ImageConatiner>

      <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>

      <DescriptionConatiner>
        <Typography>
          The JavaScript reference implementation for GraphQL, a query language
          for APIs created by Facebook.
        </Typography>
      </DescriptionConatiner>

      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat sleep Code Repeat</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;

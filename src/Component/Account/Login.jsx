import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import React, { useContext } from "react";
import { qrCodeImage } from "../../contant/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../Context/AccountPrvider";
import { addUser } from "../Service/Api";

const Component = styled(Box)`
  display: flex;
`;

const styledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 25px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const dialogstyle = {
  height: "90%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  // overflo
};

const Login = () => {
  const { setAccount } = useContext(AccountContext);
  const onLoginSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log(res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }}>
      <Component>
        <Container>
          <Title>To use Whatsapp on your computer</Title>
          <styledList>
            <ListItem>1. open whatsapp on your phone</ListItem>
            <ListItem>2. Tap Menu Setting and select whatsapp web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </styledList>
        </Container>

        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              tranform: "translateX:(25%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default Login;

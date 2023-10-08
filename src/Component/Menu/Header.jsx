import { useContext, useState } from "react";
import { AccountContext } from "../Context/AccountPrvider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../Drawer/InfoDrawer";

const Header = () => {
  const Component = styled(Box)`
    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
  `;

  const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
      margin-left: 2px;
      padding: 8px;
      color: #000;
    }

    /* & :first-child {
      font-size: 2px;
      margin-right: 8px;
      margin-top: 3px;
    } */
  `;

  const Image = styled("img")({
    height: 40,
    width: 40,
    borderRadius: "50%",
  });
  const { account } = useContext(AccountContext);
  // console.log(account);

  const [openDrawer, setOpenDrawer] = useState(false);

  const toogleDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Component>
        <Image src={account.picture} onClick={toogleDrawer} />
        <Wrapper>
          <ChatIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};

export default Header;

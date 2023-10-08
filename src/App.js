import logo from "./logo.svg";
import "./App.css";
import Messenger from "./Component/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./Component/Context/AccountPrvider";

function App() {
  const clientId =
    "120822013605-2orouqvh70ablgovd648k1uam0fv2i8p.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

// 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

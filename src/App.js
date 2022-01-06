import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="3a906d46-4257-41ac-bed8-3747be740a33"
      userName="Seoyum"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;

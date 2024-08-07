import { Inbox } from "@novu/react";
import "./App.css";

function App() {
  return (
    <>
      <Inbox
        options={{
          applicationIdentifier: "lyBNBex05E9p",
          subscriberId: "1234",
        }}
      />
    </>
  );
}

export default App;

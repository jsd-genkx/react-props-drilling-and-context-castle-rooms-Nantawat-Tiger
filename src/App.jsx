import { useState } from 'react';
import castle from "./components/castle";

function App() {
    const [replyMessage, setReplyMessage] = useState("");

    const handleReply = (message) => {
      setReplyMessage(message);
    };

    const message1 = "Do you love React?";


  return (
    <div>
      <p>Message for JSD8: {message1}</p>
      <p>
        Reply from the secret room : {" "}
        <span>
          {replyMessage ? replyMessage : "Waiting for a reply..."}
        </span>
      </p>
      <castle message1={message1} handleReply={handleReply}  />
    </div>
  )
}

export default App

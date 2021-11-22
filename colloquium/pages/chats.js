import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
// import for dynamic imports because chatengine uses a tech that doesnt support next.js
// makes sure site doesnt break
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() => 
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() => 
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const [showChat, setShowChat] = useState(false);
  const { username, secret } = useContext(Context);
  const router = useRouter();

  useEffect( () => {
    if(typeof document !== null) {
      setShowChat(true);
    }
    else if (!showChat) {
      return <div></div>;
    }
  })

  useEffect(() => {
    if(username.length === 0 || secret.length === 0) router.push("/");
  });

  return(
    <div className="background">
      <div className="shadow">
        <ChatEngine 
          height="calc(100vh - 200px)"
          projectID="88dffc9e-6d84-4215-bbd9-b1ac7b39d789"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial/>} 
        />
      </div>
    </div>
  ) 
}

import { useState } from "react";
import ChatContainer from "../Components/chat/chatContainer";
import ChatSideBar from "../Components/chat/chatSidebar";
import menu from "/assets/menu.png";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  // if form is successful, return chat, else return onboarding
  return (
    <>
      <ChatSideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="lg:ml-[309px]">
        {/* desktop */}
        <header
          className="hidden lg:flex border-[#E6E5EE] border-b-[1px]  
        lg:justify-between px-16 py-5 lg:items-center"
        >
          {" "}
          <p className="font-semibold text-[32px]">Chat</p>
          <div>
            <img src="" alt="" />
            <p>fill form</p>
          </div>
        </header>

        {/* mobile */}
        <header
          className="lg:hidden text-center border-[#E6E5EE] border-b-[1px] 
        px-16 py-4 flex-between"
        >
          <img src={menu} onClick={() => setIsOpen(!isOpen)} alt="menu icon" />
          <p className="font-semibold text-[32px]">Chat</p>
          <div></div>
        </header>

        <ChatContainer />
      </main>
    </>
  );
}

export default Chat;

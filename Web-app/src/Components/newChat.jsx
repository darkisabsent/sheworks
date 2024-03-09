import { useEffect, useRef } from "react";
import send from "/assets/send.png";
import PropTypes from "prop-types";

function NewChat({ input, handleFormChange, messages, handleChat }) {
  const chatLogRef = useRef(null);
  // Function to scroll to the bottom of the message container
  const scrollToBottom = () => {
    chatLogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Initially, and whenever the messages change, scroll to the bottom
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div className="relative h-[80vh]">
        {messages.map((message, index) => (
          <div
            className={`message ${
              message.isUser ? "user flex-row-reverse" : "bot bg-[#F6F6FB]"
            }  px-9 lg:px-20`}
            key={index}
          >
            {message.isUser ? (
              <div className="max-w-5xl mx-auto">
                <div className="flex items-start justify-end  py-4">
                  <div className="p-2">{message.text}</div>
                  <img
                    className="ml-4 rounded-full h-10 w-10 inline mr-2"
                    src="https://media.licdn.com/dms/image/D4E03AQEE2FN8zYi_hw/profile-displayphoto-shrink_800_800/0/1699312401461?e=1715212800&v=beta&t=vM0Am7jBi3Ej8WnEiQwQa3QqRalphh76WOMjbKfMDjs"
                    alt="Profile"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-start jus max-w-5xl py-4">
                    <img
                      className="ml-4 rounded-full h-10 w-10 inline mr-2"
                      src="https://byrdis.com/cdn/shop/products/MG_1067a.jpg?v=1583582710"
                      alt="Profile"
                    />
                    <div className="p-2 rounded-lg">{message.text}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* add this empty div to scroll into view */}
        <div className=" h-40" ref={chatLogRef}></div>

        {/* form */}
        <div className="fixed bottom-9 z-10 left-0 right-0 lg:ml-[309px] ">
          <div className="grid place-items-center">
            <div className=" ">
              <form
                action=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="relative w-fit"
                onSubmit={handleChat}
              >
                <input
                  className="w-[400px] "
                  type="text"
                  name="question"
                  placeholder="Type your message..."
                  value={input.question}
                  onChange={handleFormChange}
                  autoFocus
                />
                <button className="absolute right-3 ">
                  <img src={send} alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

NewChat.propTypes = {
  setMessages: PropTypes.func,
  handleChat: PropTypes.func,
  handleFormChange: PropTypes.func,
  input: PropTypes.object,
  messages: PropTypes.array,
};
export default NewChat;

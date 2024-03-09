// import { useState } from "react";
import PropTypes from "prop-types";
function ChatOnboarding({ getNextStep, input, handleFormChange }) {
  return (
    <>
      <div className=" mt-6  lg:mt-12 ml-12 lg:ml-[100px]">
        <div>
          <h2>Welcome, Selim!</h2>
          <p>
            Click the button down Below to access Chat!
          </p>
        </div>

        <form
          onSubmit={getNextStep}
          className=" mb-8 shadow-chat-onboarding p-8 lg:mr-[100px] max-w-[749px]"
        >
          {/* one */}
          

          {/* two */}
          

          

          <button className=" rounded-lg py-[18px] px-14 bg-pink-400 text-white">
            Proceed to Chat
          </button>
        </form>
      </div>
    </>
  );
}

ChatOnboarding.propTypes = {
  getNextStep: PropTypes.func,
  handleFormChange: PropTypes.func,
  input: PropTypes.object,
};
export default ChatOnboarding;

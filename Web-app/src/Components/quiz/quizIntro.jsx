import { useState } from "react";
import { useSelector } from "react-redux";
import MainQuiz from "./mainQuiz";

function Intro() {
  const [showForm, setShowForm] = useState(false);
  const user = useSelector((state) => state.user);

  const handleProceed = () => {
    setShowForm(true);
  };

  return (
    <>
      <div>
        {showForm ? (
          <MainQuiz />
        ) : (
          <div className="p-10 text-center">
            <div>
              <h1 className="mb-6">
                Welcome, {user.providerData[0].displayName || "User"}!
              </h1>
              {/* <p>What type of quiz do you want take?</p> */}
            </div>

            
            
            <button
              className="bg-pry-col py-2 px-8 lg:py-[18px] lg:px-20 
                  rounded-lg text-white "
              onClick={handleProceed}
            >
              Proceed to form
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Intro;

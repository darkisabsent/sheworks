import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuizForm from "./quizForm";

function MainQuiz() {
  const [input, setInput] = useState({
    language: "English",
    topic: "",
    course_code: "",
    explanation_level: "Advanced insights",
    prior_knowledge: "Little",
    explanation_type: "In-depth explorations",
    interaction_needed: "Yes",
  });

  const [quizData, setQuizData] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    getQuiz();
  }, []);

  // don't mind this wassim

  const getQuiz = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "ARRAffinity=d3ae43c979c2cf911cdf1a2b87ef67e3ff3e7580ec1c1e247979dcdaa1f864d9; ARRAffinitySameSite=d3ae43c979c2cf911cdf1a2b87ef67e3ff3e7580ec1c1e247979dcdaa1f864d9"
    );

    var raw = JSON.stringify({
      language: "English",
      course_code: "CSC401",
      page_number: 0,
      topic: "jet engines",
      explanation_level: "Advanced insights",
      prior_knowledge: "Little",
      explanation_type: "In-depth explorations",
      interaction_needed: "Yes",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://innovatex.azurewebsites.net/quiz", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result) {
          // console.log(result);
          const responseObject = JSON.parse(result);
          // console.log(responseObject?.message);
          setQuizData(responseObject?.message);
        }
      })
      .catch((error) => console.log("error", error));
  };
  const handleStartQuiz = () => {
    setShowQuiz(true);
  };
  // console.log(quizData);
  const questions = Object.keys(quizData?.questions || {});
  // console.log(questions);

  const handleOptionSelect = (question, option) => {
    setSelectedOptions({ ...selectedOptions, [question]: option.trim() });
  };

  const handlePrevious = () => {
    setCurrentQuestion(Math.max(currentQuestion - 1, 1));
  };

  const handleNext = () => {
    setCurrentQuestion(Math.min(currentQuestion + 1, questions.length));
  };

  const handleQuizSubmit = () => {
    let correctCount = 0; // Initialize a variable to count correct answers
    for (const question of questions) {
      // console.log(
      //   selectedOptions[question] === quizData.questions[question].answer
      // );

      if (selectedOptions[question] === quizData.questions[question].answer) {
        correctCount++; // Increment the count for each correct answer
      }
    }

    setCorrectAnswers(correctCount); // Update the correctAnswers state

    // console.log(correctCount);
    setShowModal(true);
    return correctCount; // You can return the count if needed
  };

  return (
    <>
      {showQuiz ? (
        <div className="mx-auto max-w-3xl px-4 py-10">
          <div className="flex-between mb-8">
            <h3>Proceeding</h3>
            <span>loading</span>
          </div>
          {quizData ? (
            currentQuestion <= questions.length ? (
              <div>
                <h3 className="font-bold text-lg mb-4">
                  {questions[currentQuestion - 1]}
                </h3>
                {quizData.questions[questions[currentQuestion - 1]].options.map(
                  (option, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        name={`q${currentQuestion}`}
                        value={option}
                        checked={
                          selectedOptions[questions[currentQuestion - 1]] ===
                          option.trim()
                        }
                        onChange={() =>
                          handleOptionSelect(
                            questions[currentQuestion - 1],
                            option
                          )
                        }
                      />
                      {option}
                    </div>
                  )
                )}
                <div className="flex-between mt-4">
                  <button
                    className="border-[1px] border-pry-col rounded-lg px-9 py-[19px]"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 1}
                  >
                    Previous
                  </button>
                  {currentQuestion === questions.length ? (
                    <div>
                      <button
                        className="bg-pry-col py-2 px-8 lg:py-[18px] lg:px-20 
                  rounded-lg text-white "
                        onClick={handleQuizSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  ) : (
                    <button
                      className="border-[1px] border-pry-col rounded-lg px-9 py-[19px]"
                      onClick={handleNext}
                      disabled={currentQuestion === questions.length}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <h2>Loading...</h2>
            )
          ) : (
            "Loading"
          )}

          {showModal && (
            // <div className="modal">
            //   <div className="modal-content">
            //     <p>
            //       You got {correctAnswers} out of {questions.length} correct
            //       answers!
            //     </p>
            //   </div>
            // </div>

            <div className="fixed inset-0 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex items-center justify-center">
                  <svg
                    className="text-green-500 w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium">Quiz Result</h3>
                  <p className="mt-2 text-gray-600">
                    You got {correctAnswers} out of {questions.length} correct
                    answers!
                  </p>

                  <div className="mt-4 flex-center gap-4">
                    <button
                      className="bg-pry-col text-white py-2 px-4 rounded
                     hover:bg-green-600"
                      onClick={() => window.location.reload()}
                    >
                      <Link to="/quiz"> Start a New Quiz</Link>
                    </button>
                    <button
                      className="bg-pry-col text-white py-2 px-4 rounded
                     hover:bg-green-600"
                    >
                      <Link to="/chat">Back to Chat</Link>
                    </button>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      className="bg-pry-col text-white py-2 px-4 rounded hover:bg-green-600"
                      onClick={() => {
                        setShowModal(!showModal);
                      }}
                    >
                      Close
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <QuizForm
          input={input}
          setInput={setInput}
          handleStartQuiz={handleStartQuiz}
        />
      )}
    </>
  );
}

export default MainQuiz;

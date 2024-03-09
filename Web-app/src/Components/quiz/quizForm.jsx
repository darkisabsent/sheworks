import PropTypes from "prop-types";
import { useState } from "react";

function Form({ handleStartQuiz }) {
  return (
    <>
      <form action="" className="px-6 pt-12 max-w-xl mx-auto">
        <div className="flex flex-col  w-full">
          <label htmlFor="course">
            are you ok
          </label>
          <select
            name="course"
            id="course"
            // value=""
            placeholder="Select a course"
            // onChange={handleChange}
            className=" border-[#D0D5DD] border-[1px] py-[10px] px-14px rounded-lg outline-none"
          >
            <option value="" defaultValue>
              Select 
            </option>
            <option value="CSC 201">yes</option>
            <option value="CSC 203">no</option>
          </select>
        </div>
        <div className="flex flex-col  w-full my-4">
          <label htmlFor="topic">
            is life good?
          </label>
          <select
            name="topic"
            id="topic"
            value=""
            placeholder="Select a topic"
            // onChange={handleChange}
            className=" border-[#D0D5DD] border-[1px] py-[10px] px-14px rounded-lg outline-none"
          >
            <option value="" defaultValue>
              Select 
            </option>
            <option value="CSC 201">yes</option>
            <option value="CSC 203">no</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-pry-col py-2 px-8 lg:py-[18px] lg:px-20 
                  rounded-lg text-white "
          onClick={handleStartQuiz}
        >
          Submit
        </button>
      </form>
    </>
  );
}

Form.propTypes = {
  handleStartQuiz: PropTypes.func,
};

export default Form;

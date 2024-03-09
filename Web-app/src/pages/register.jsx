import { useState } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import image from "/assets/logo5.png";

function Register() {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    username:"",
    email: "",
    password: "", 
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [name]: "" });
  }
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const { username,email, password } = input;
    createUserWithEmailAndPassword(auth,email, password)
    
      .then(async(userCredential) => {
        const user = userCredential.user;
        const db = getDatabase();
        const usersRef = ref(db, 'users/' + user.uid);
        const userData = {
          username: username,
          email: email,
          // Add any additional fields you want to store
        };
        await set(usersRef, userData);
        console.log('Username:', username);

        toast("Registration successful"); // Display a success toast
        setTimeout(() => {
          navigate("/login"); // Redirect to the login page
        }, 2000);
        setLoading(false);
        setInput({
          username:"",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        toast(error.message);
        console.log(error.code);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
      exportUsername(username);
  }
  return(
    <>
      <div className="  px-4 h-[100vh] flex items-center justify-center" style={{ background: 'linear-gradient(78deg, rgba(255,242,244,1) 31%, rgba(245,11,176,1) 100%)' }}>
        <div className="flex justify-center items-center lg:gap-20 xl:gap-[150px]">
          {/* image */}
          <div className="hidden lg:block ">
            <img src={image} alt="" />
          </div>

          <div className="   px-[25px] lg:px-0 ">
            <h2 className=" font-semibold text-[28px] text-5xl">
              Create an Account
            </h2>

            <form onSubmit={handleSubmit}>
              <div className=" my-8">
                <div className="mb-3 settings-form-field">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    name="username"
                    type="text"
                    value={input.username}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputuser"

                  />
                  <div className=" text-red-500">{errors && errors.email}</div>
                </div>
                <div className="mb-3 settings-form-field">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="text"
                    value={input.email}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div className=" text-red-500">{errors && errors.email}</div>
                </div>

                <div className="mb-3 settings-form-field">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                  {errors.password && (
                    <div className="text-[red]">{errors.password}</div>
                  )}
                </div>
              </div>
              <div className=" text-right">Forgot password</div>

              <button className=" bg-pry-col mt-4 text-white w-full py-4 rounded-lg">
                {loading ? "Submitting..." : "Sign Up"}
              </button>
              <ToastContainer />

              <div className=" mt-4 text-center">
                <span>Already have an account?</span>
                <Link to="/login" className=" text-pry-col ml-2">
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

let onUsernameReady;

function exportUsername(username) {
  if (onUsernameReady) {
    onUsernameReady(username);
  }
}



export { onUsernameReady };

export default Register;

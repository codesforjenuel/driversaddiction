import React, { useState } from "react";
import Nav from "../components/Nav";
// import Createruserform from "../components/Createuserform";
import Footer from "../components/Footer";
import auth from "../utils/auth"

const Login = () => {
  const [postName, setPostName] = useState("");
  const [postEmail, setPostEmail] = useState("");
  const [postPassword, setPostPassword] = useState("");

  const handleFormSubmit = async (event, action) => {
    event.preventDefault();

    ;

    if (action === 'login') {
      let url = '/api/users/login/'
      try {
        const dataToSubmit = {
          name: postName,
          email: postEmail,
          password: postPassword
        };
  
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSubmit)
        });
  
        if (response.ok) {
          const responseData = await response.json();
      auth.login(responseData)
        } else {
          console.error('Failed to perform action');
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    } else if (action === 'logout') {
      auth.logout()
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
    <Nav />
    <div className="flex flex-col items-center justify-center w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-500 to-white">
      <form className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
        </div>
        <div className="mt-4">
          <input
            type="text"
            name="name"
            value={postName}
            onChange={(event) => setPostName(event.target.value)}
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={postEmail}
            onChange={(event) => setPostEmail(event.target.value)}
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 mt-4"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={postPassword}
            onChange={(event) => setPostPassword(event.target.value)}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 mt-4"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={(event) => handleFormSubmit(event, 'login')}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Login
          </button>
          <button
            type="submit"
            onClick={(event) => handleFormSubmit(event, 'logout')}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Logout
          </button>
        </div>
      </form>
      {/* <Createruserform/> */}
    </div>
    <Footer />
  </div>
    
  );
};

export default Login;

import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_API_ENDPOINT } from '../utils/constant';
import { getUser } from '../redux/userSlice';


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${AUTH_API_ENDPOINT}/login`, { username, password }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      console.log(res.data);
      if (res.data) {
        dispatch(getUser(res?.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[36rem] bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 rounded"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 bg-gray-700 rounded"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600 transition duration-200">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

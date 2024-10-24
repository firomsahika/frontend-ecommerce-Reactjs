// src/Login.js
import api from '@/api';
import { AuthContext } from '@/context/AuthContext';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => { 
  
  const {setIsAuthenticated, get_user_info} = useContext(AuthContext) 

  const location = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("")
  const [username, setUserName]= useState("")
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState("")

  const userInfo = {username, password}

  function handleSubmit(e){
    e.preventDefault()
    setLoading(true)

    api.post("token/", userInfo)
    .then(res =>{
      console.log(res.data)

      localStorage.setItem("access", res.data.access)
      localStorage.setItem("refresh", res.data.refresh)

      setUserName("")
      setPassword("")
      setLoading(false)
      get_user_info()
      setIsAuthenticated(true)
      // setError("")

     
      const from = location?.state?.from.pathname || "/";
      navigate(from, { replace:true });
    })
    .catch(err =>{
      console.log(err.message)
      setLoading(false)
      // setError(err.message)
    })
  }




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign in to Shoppit</h2>
        <form onSubmit={handleSubmit}>
        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          <a href="#" className="text-blue-500 font-semibold hover:underline">Forgot password</a>
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-blue-500 font-semibold hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [emailuser, setEmailuser] = useState('');
  const [passworduser, setPassworduser] = useState('');
  const navigate = useNavigate();

  const haund = () => {
    if (
      localStorage.getItem('email') == emailuser &&
      localStorage.getItem('password') == passworduser
    ) {
      navigate('/');
    }
  };
  return (
    <>
      <section class="flex flex-col items-center pt-6 m-10 ">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form class="space-y-4 md:space-y-6" method="">
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="emelia_erickson24"
                  required=""
                  onChange={(e) => setEmailuser(e.target.value)}
                  value={emailuser}
                />
              </div>
              <div className="">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  required=""
                  onChange={(e) => setPassworduser(e.target.value)}
                  value={passworduser}
                />
              </div>
              <p class="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">
                Forgot password?
              </p>

              <br></br>

              <Link to="/Home">
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={haund}
                >
                  Login
                </button>
              </Link>
              <br></br>
              <br></br>
              <Link to="/Sinup">
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have Account:?{' '}
                  <a
                    class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="/"
                  >
                    Create account here
                  </a>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

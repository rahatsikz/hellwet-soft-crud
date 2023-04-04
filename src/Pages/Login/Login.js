import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-9/12 lg:w-8/12 mx-auto">
      <div class="h-screen">
        <div class="h-full">
          <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Sample"
              />
            </div>

            <div className="mt-12 w-2/3 lg:w-4/12">
              <form>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#2879E1]"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-[#2879E1]"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="bg-[#2879E1] text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-[#2745E9]
                                shadow-lg"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="divider my-8">OR</div>
              <div className="mt-10">
                <button
                  className="bg-white border text-gray-700 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:text-[#2879E1]
                                shadow-lg flex items-center justify-center"
                >
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="25px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Sign in With Google
                </button>
              </div>
              <div className="mt-12 mb-8 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ? &nbsp;
                <Link
                  to="/register"
                  className="cursor-pointer text-[#2879E1] hover:text-[#2745E9]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
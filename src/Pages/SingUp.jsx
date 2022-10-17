import React from "react";
import { Link } from "react-router-dom";

export default function SingUp() {
  return (
    <>
      <div className="w-full h-[880px]">
        <img
          className="hidden sm:block absolute w-full object-cover h-[880px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[880px]"></div>

        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px]  h-[600px] mx-auto rounded-md bg-black/75 text-white">
            <div className="max-w-[310px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p className="">
                    <input type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-10 text-sm">
                  <span className="text-gray-400">
                    Already Subscribed to NetFlix?
                  </span>{" "}
                  <Link to="/login">Sing In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

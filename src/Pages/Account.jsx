import React from "react";
import SavedShows from "../component/SavedShows";

export default function Account() {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full object-cover h-[600px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-[600px] "></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl text-center font-bold py-10">
            My Shows
          </h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
}

import React, { useRef } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";

import Search from "./assets/icon-search.svg";
import Location from "./assets/icon-location.svg";
import Website from "./assets/icon-website.svg";
import Twitter from "./assets/icon-twitter.svg";
import Company from "./assets/icon-company.svg";

import Sun from "./assets/icon-sun.svg";
import Moon from "./assets/icon-moon.svg";

const App = () => {
  const queryClient = useQueryClient();
  const userInput = useRef("octocat");

  const { isLoading, isError, data } = useQuery(["user"], () =>
    axios
      .get(
        `https://api.github.com/users/${
          userInput.current === "octocat"
            ? userInput.current
            : userInput.current.value
        }`
      )
      .then((res) => res.data)
  );

  const handleInput = (e) => {
    e.preventDefault();
    queryClient.invalidateQueries(["user"]);
  };

  const handleThemeSwitch = () => {
    const body = document.querySelector("body");
    document.querySelector("#root").classList.toggle("dark");
    body.classList.toggle("bg-lightBg");
    body.classList.toggle("bg-darkBg");
  };

  if (isLoading) return <pre>Loading...</pre>;

  return (
    <>
      <header className="pt-8 pb-9 px-6 bg-lightBg flex items-center dark:bg-darkBg">
        <span className="text-[26px] font-bold text-lightHeader mr-auto dark:text-white">
          devfinder
        </span>
        <div className="block dark:hidden" onClick={handleThemeSwitch}>
          <span className="text-[13px] text-lightBlue mr-4 font-bold">
            DARK
          </span>
          <img className="inline-block" src={Moon} alt="Dark mode toggle" />
        </div>
        <div className="hidden dark:block" onClick={handleThemeSwitch}>
          <span className="text-[13px] text-white mr-4 font-bold">LIGHT</span>
          <img className="inline-block" src={Sun} alt="Light mode toggle" />
        </div>
      </header>
      <main>
        <form
          onSubmit={(e) => handleInput(e)}
          className="min-h-[60px] flex items-center justify-between mx-6 mb-4 bg-white rounded-2xl shadow-lg dark:bg-darkModeBlue"
        >
          <img className="ml-4 mr-2" src={Search} alt="Search Icon" />
          <input
            type="text"
            ref={userInput}
            className="w-full placeholder:text-lightBlue dark:text-white placeholder:text-[13px] focus:outline-none caret-darkBlue bg-transparent dark:placeholder:text-white"
            placeholder="Search GitHub username..."
          />
          {isError && (
            <span className="text-error text-[15px] min-w-[92px] mr-6 font-bold">
              No results
            </span>
          )}
          <button className="bg-darkBlue min-w-[84px] min-h-[46px] mr-2 rounded-[10px] text-white font-bold">
            Search
          </button>
        </form>
        <section className="mx-6 bg-veryLightWhite rounded-2xl pt-8 mb-8 px-6 shadow-lg dark:bg-darkModeBlue">
          <div className="flex gap-5 mb-8">
            <img
              className="max-w-[70px] max-h-[70px] rounded-full"
              src={data.avatar_url}
              alt="User avatar"
            />
            <div>
              <h1 className="text-lightHeader font-bold dark:text-white">
                {data.name}
              </h1>

              {data.company && (
                <span className="mb-2 block text-[13px] text-darkBlue">
                  {data.company}
                </span>
              )}

              <h3 className="text-[13px] text-grayishBlue dark:text-white">
                Joined {moment(data.created_at).format("D MMM YY")}
              </h3>
            </div>
          </div>
          <p className="text-[13px] text-lightBlue mb-6 dark:text-white">
            {data.bio ?? "This profile has no bio"}
          </p>
          <ul className="px-4 bg-lightBg dark:bg-darkBg min-h-[85px] mb-6 flex items-center rounded-[10px] justify-between text-darkBg dark:text-white">
            <li className="flex flex-col gap-2 items-center text-[11px] w-1/3">
              Repos
              <span className="text-base text-lightHeader font-bold dark:text-white">
                {data.public_repos}
              </span>
            </li>
            <li className="flex flex-col gap-2 items-center text-[11px] w-1/3">
              Followers
              <span className="text-base text-lightHeader font-bold dark:text-white">
                {data.followers}
              </span>
            </li>
            <li className="flex flex-col gap-2 items-center text-[11px] w-1/3">
              Following
              <span className="text-base text-lightHeader font-bold dark:text-white">
                {data.following}
              </span>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 pb-12">
            <li className="flex gap-[13px] items-center text-[13px] text-lightBlue dark:text-white">
              <img
                className="mr-[6px] dark:invert-[98%] dark:sepia dark:saturate dark:hue-rotate-[8deg] dark:brightness-0 dark:contrast-[105%]"
                src={Location}
                alt="Location Icon"
              />
              {data.location}
            </li>
            <li className="flex gap-[13px] items-center text-[13px] text-lightBlue dark:text-white">
              <img
                className="dark:invert-[98%] dark:sepia dark:saturate dark:hue-rotate-[8deg] dark:brightness-0 dark:contrast-[105%]"
                src={Website}
                alt="Website Icon"
              />
              {data.blog}
            </li>
            <li
              className={`flex gap-[13px] items-center text-[13px] text-lightBlue dark:text-white ${
                !data.twitter_username && "opacity-50"
              }`}
            >
              <img
                className="dark:invert-[98%] dark:sepia dark:saturate dark:hue-rotate-[8deg] dark:brightness-0 dark:contrast-[105%]"
                src={Twitter}
                alt="Twitter Icon"
              />
              {data.twitter_username ?? "Not Available"}
            </li>
            {data.company && (
              <li className="flex gap-[13px] items-center text-[13px] text-lightBlue dark:text-white">
                <img
                  className="dark:invert-[98%] dark:sepia dark:saturate dark:hue-rotate-[8deg] dark:brightness-0 dark:contrast-[105%]"
                  src={Company}
                  alt="Company Icon"
                />
                {data.company}
              </li>
            )}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;

import React, { useRef } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

import Location from "./assets/icon-location.svg";
import Website from "./assets/icon-website.svg";
import Twitter from "./assets/icon-twitter.svg";
import Company from "./assets/icon-company.svg";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";

const App = () => {
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

  if (isLoading)
    return (
      <main className="min-w-screen min-h-screen grid place-items-center">
        Loading...
      </main>
    );

  return (
    <>
      <Header />
      <main className="max-w-[621px] md:max-w-[778px] mx-auto">
        <SearchBar inputRef={userInput} isError={isError} />
        <section className="mx-6 bg-veryLightWhite rounded-2xl pt-8 mb-8 sm:mb-0 px-6 md:px-12 shadow-lg dark:bg-darkModeBlue md:flex gap-[37px]">
          <img
            className="max-w-[117px] max-h-[117px] rounded-full hidden md:block"
            src={data.avatar_url}
            alt="User avatar"
          />
          <div>
            <div className="flex gap-5 sm:gap-10 mb-8 sm:items-center sm:mb-6 md:items-start">
              <img
                className="max-w-[70px] max-h-[70px] sm:max-w-[117px] sm:max-h-[117px] rounded-full md:hidden"
                src={data.avatar_url}
                alt="User avatar"
              />
              <div className="md:grid grid-cols-2 grow">
                <h1 className="text-lightHeader font-bold dark:text-white sm:text-[26px] sm:mb-[2px]">
                  {data.name ?? "Unknown"}
                </h1>

                {data.company && (
                  <span className="mb-2 block text-[13px] text-darkBlue sm:text-base sm:mb-1">
                    {data.company}
                  </span>
                )}
                <h3 className="text-[13px] text-grayishBlue dark:text-white sm:text-[15px] md:col-start-2 md:row-start-1 justify-self-end self-center">
                  Joined {moment(data.created_at).format("D MMM YY")}
                </h3>
              </div>
            </div>
            <p className="text-[13px] text-lightBlue mb-6 dark:text-white sm:text-[15px] sm:mb-8">
              {data.bio ?? "This profile has no bio"}
            </p>
            <ul className="px-4 sm:px-8 bg-lightBg dark:bg-darkBg min-h-[85px] mb-6 flex items-center rounded-[10px] justify-between sm:justify-start text-darkBg dark:text-white">
              <Stats name="Repos" data={data.public_repos} spacing={99} />
              <Stats name="Followers" data={data.followers} spacing={82} />
              <Stats name="Following" data={data.following} />
            </ul>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-5 pb-12 sm:pb-10 sm:gap-x-12">
              <ListItem
                data={data.location}
                img={Location}
                alt="Location"
                order={1}
              />
              <ListItem
                data={data.blog}
                img={Website}
                alt="Website"
                order={2}
              />
              <ListItem
                data={data.twitter_username}
                img={Twitter}
                alt="Twitter"
                order={1}
              />
              <ListItem
                data={data.company}
                img={Company}
                alt="Company"
                order={2}
              />
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;

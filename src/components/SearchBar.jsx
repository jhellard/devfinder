import Search from "../assets/icon-search.svg";

const SearchBar = ({ handleInput, inputRef, isError }) => {
  return (
    <form
      onSubmit={(e) => handleInput(e)}
      className="min-h-[60px] sm:min-h-[69px] flex items-center justify-between mx-6 mb-4 sm:mb-6 bg-white rounded-2xl shadow-lg dark:bg-darkModeBlue"
    >
      <img
        className="ml-4 mr-2 sm:ml-8 sm:mr-6"
        src={Search}
        alt="Search Icon"
      />
      <input
        type="text"
        ref={inputRef}
        className="w-full placeholder:text-lightBlue cursor-pointer focus:cursor-auto dark:text-white placeholder:text-[13px] sm:placeholder:text-[18px] focus:outline-none caret-darkBlue bg-transparent dark:placeholder:text-white"
        placeholder="Search GitHub username…"
      />
      {isError && (
        <span className="text-error text-[15px] min-w-[92px] mr-6 font-bold">
          No results
        </span>
      )}
      <button className="bg-darkBlue min-w-[84px] min-h-[46px] sm:min-w-[106px] sm:min-h-[50px] mr-2 rounded-[10px] text-white font-bold hover:bg-buttonHover">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

const Stats = ({ name, data, spacing }) => {
  const spacingVariants = {
    99: "sm:mr-[99px]",
    82: "sm:mr-[82px]",
  };

  return (
    <li
      className={`flex flex-col gap-2 items-center text-[11px] sm:text-[13px] w-1/3 sm:w-auto sm:items-start ${spacingVariants[spacing]}`}
    >
      {name}
      <span className="text-base sm:text-[22px] text-lightHeader font-bold dark:text-white">
        {data}
      </span>
    </li>
  );
};

export default Stats;

const ListItem = ({ data, img, alt, order }) => {
  const orderVariants = {
    1: "sm:order-1",
    2: "sm:order-2",
    3: "sm:order-3",
    4: "sm:order-4",
  };

  return (
    <li
      className={`flex gap-[13px] items-center text-[13px] text-lightBlue dark:text-white sm:min-w-[45%] order-4 sm:text-[15px] ${
        orderVariants[order]
      } ${!data && "opacity-50"}`}
    >
      <img
        className={`${
          img === "/src/assets/icon-location.svg" && "mr-[6px]"
        } dark:invert-[98%] dark:sepia dark:saturate dark:hue-rotate-[8deg] dark:brightness-0 dark:contrast-[105%]`}
        src={img}
        alt={`${alt} Icon`}
      />
      {data ? (
        alt === "Website" ? (
          <a className="hover:underline cursor-pointer" href={data.blog}>
            {data}
          </a>
        ) : (
          data
        )
      ) : (
        "Not Available"
      )}
    </li>
  );
};

export default ListItem;

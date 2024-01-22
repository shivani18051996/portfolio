const MyProject = () => {
  const posts = [
    {
      title: "Netflix App",
      img: "/images/netflix-clone.png",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "Food Ordering App",
      img: "/images/food-ordering-app.png",
      content:
        " A Food Ordering App that display the list of food Items , having the functionality ADD TO CART , CHECKOUT , FILTER ITEMS , SEARCH ITEMS",
    },
    {
      title: "StopWatch App",
      img: "/images/stopwatch.png",
      content:
        " A stopwatch is a timekeeping device with start, stop, and reset functionalities, measuring elapsed time from the moment it's started.",
    },
    {
      title: "Timer App",
      img: "/images/timer.png",
      content:
        "A Timer App typically includes start, pause, resume, and reset functionalities, enabling users to manage and monitor elapsed time.",
    },
  ];
  return (
    <>
      <div className="text-4xl font-bold text pt-8 mb-10">
        <span>My </span>
        <span className="text-blue-400">Projects</span>
      </div>
      <div className="grid gap-2 lg:grid-cols-4 mb-24">
        {posts.map((items, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={items.img}
              alt={items.title}
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {items.title}
              </h4>
              <p className="mb-2 leading-normal">{items.content}</p>
              <div className="">
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow mr-4">
                  Live Link
                </button>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                  Code Link
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default MyProject;

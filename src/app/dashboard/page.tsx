import PostCard from "@/components/PostCard";

const DashBoard = () => {
  return (
    <div className="font-sans h-full w-full">
      <div className="flex flex-col gap-8 items-center  justify-center max-w-6xl mx-auto px-5">
        <h1 className=" text-center md:text-3xl text-xl font-bold">
          DashBoard Page
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

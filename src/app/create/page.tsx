import CreatePostForm from "@/components/CreatePostForm";

const CreatePage = () => {
  return (
    <div className="font-sans h-full w-full">
      <div className="flex flex-col gap-8 items-center  justify-center max-w-6xl mx-auto px-5">
        <h1 className=" text-center md:text-3xl text-xl font-bold">
          CreatePost
        </h1>
        <CreatePostForm />
      </div>
    </div>
  );
};

export default CreatePage;

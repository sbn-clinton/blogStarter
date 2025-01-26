import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";

const PostCard = () => {
  return (
    <Card className="w-[80%] md:w-fit mx-auto p-3 flex flex-col gap-3">
      <Image
        src={"/images/img.png"}
        alt="Post"
        width={400}
        height={100}
        className="rounded-lg "
      />

      <div className="flex flex-col gap-2">
        <h2 className=" md:text-xl font-bold">Lorem, ipsum dolor.</h2>
        <p className="text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna et, consequat.
        </p>
        <div className="flex gap-2 items-center justify-between ">
          <p className="text-xs md:text-sm text-sky-500">Technonlogy</p>
          <Link href={"/"} className="text-xs underline">
            Read More
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
